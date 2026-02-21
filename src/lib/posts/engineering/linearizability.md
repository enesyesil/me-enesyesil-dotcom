---
title: "Linearizability: What 'Correct' Actually Means When Operations Overlap"
description: "A careful look at why informal correctness arguments collapse under concurrency, and what it takes to replace them with something rigorous."
date: 2026-01-17
image: /images/linear.png
tags: ["Concurrency", "Correctness", "Linearizability", "Lock-Free"]
---

Saying a concurrent program is correct requires agreeing on what correct means. In a single-threaded setting that question rarely comes up, because the execution has an obvious story: one operation finishes, the next begins, and the state at each step follows directly from what happened before. Under concurrency that story breaks down, and without a replacement, correctness arguments tend to dissolve into intuition and test results.

## The trouble with informal correctness

In a single-threaded program, reasoning about state is almost mechanical. A function call has a clear before and after. You can walk through the execution like reading a recipe: step one, step two, this value changes here, that value changes there. Correctness is, in practice, easy to describe even if it is not always easy to achieve.

Concurrency disrupts this in a specific way: it removes the assumption that operations are instantaneous. In reality, an operation like `push` or `increment` is not a point in time but an interval, running from the moment the thread invokes the method to the moment it returns. Other threads are active throughout that window, making their own reads and writes. The execution is not a clean sequence of steps with a determinate order; it is a set of overlapping intervals whose outcome depends on scheduling decisions that the programmer does not control and cannot enumerate through testing.

The informal response to this is usually something like "it seems to work." Concurrency bugs are famously timing-dependent: they appear under load, on particular hardware, or after a seemingly unrelated change shifts the scheduling. A program can pass every test you run and still contain an interleaving that produces a wrong result. Informal checks are unreliable in exactly the situations where the bugs are hardest to reproduce.

What is needed is a formal definition of correct behaviour that accounts for overlap: one precise enough that you can check a given execution against it.

## Linearizability: the core idea

Herlihy and Wing introduced linearizability in 1990 as exactly this kind of definition. The intuition behind it is worth working through before touching the formalism.

Think of a busy post office with a single shared counter that tracks the number of packages received. Customers arrive, hand over packages, and the counter should go up by one for each delivery. The problem is that clerks are processing multiple customers simultaneously: one clerk starts a transaction while another is still in the middle of a different one, and their work overlaps.

Even so, we expect the counter to account for every delivery. If five packages come in, the counter should end up five higher than it started, regardless of how the clerks' work happened to interleave. A final count that reflects only four of the five deliveries would mean the system lost a transaction somewhere, even though every clerk completed their work.

Linearizability formalises exactly this expectation. Its requirement is that every operation, despite taking place over an interval, must appear to take effect at some single instant within that interval. Pick one such instant for each operation, and you should be able to read the entire execution as a valid sequential history: one that would hold if the operations had run one at a time in that order.

Two conditions must both be satisfied. First, every operation has a *linearization point*, which is one moment inside its call-to-return window where it logically takes effect. Ordering all operations by their linearization points produces the total order that the system appears to have followed. Second, that total order must respect real-time precedence. If operation A completes before operation B begins, with no overlap between them, then A must precede B in the linearized order. You are free to reorder operations that genuinely overlapped, but you cannot contradict the ordering of operations that were clearly sequential.

When both conditions hold, a linearizable object behaves externally like the same object running single-threaded. The implementation may use concurrency internally, but the observable history can always be explained as a sequence.

## Why this particular definition

Weaker consistency models exist, and many are practically useful. Eventual consistency only requires that replicas converge over time, with no constraint on ordering at all. Sequential consistency, introduced by Lamport for processor design, requires that all threads agree on a single total order of operations but does not require that order to respect wall-clock time. Both models are cheaper to implement than linearizability.

The cost of weaker models is that they transfer reasoning obligations to the programmer. In an eventually consistent system, writing `read(x)` immediately after `write(x, 5)` does not guarantee the read returns 5, because propagation may not have completed. Under sequential consistency, a read that begins well after a write may legally return a stale value if the linearized order happens to place the write later. Programmers working with these systems need to carry a separate mental model for when writes become visible and plan their code accordingly.

Linearizability avoids this by preserving the mental model from sequential programming. Because it requires real-time ordering and per-operation atomicity, the programmer does not need to reason about propagation delays or ordering anomalies. Whatever the implementation is doing internally, a completed write is a write that has taken effect. Other models are typically described as relaxations of linearizability, and that framing is accurate: you move away from it when you need performance, and the tradeoff is an increase in reasoning complexity that gets pushed to whoever writes the application.

## Linearization points in practice

The practical work of proving linearizability is identifying a linearization point for each operation: the specific step at which it becomes universally visible to all other threads.

In many lock-free data structures, this is the successful compare-and-swap (CAS). CAS is an atomic instruction that reads a memory location, compares it against an expected value, and writes a new value only if the comparison succeeds, all as a single indivisible operation. When the comparison fails the memory is left unchanged. When it succeeds, the new value is globally visible from that point forward.

Consider a lock-free stack where `top` is a shared pointer to the head node. A `push` reads `top`, attaches the new node's `next` pointer to it, then attempts a CAS to swing `top` to the new node. When the CAS succeeds, that is the linearization point: up to that moment the new element is invisible to every other thread; from that moment onward any thread reading `top` will find it. The `pop` operation works in the opposite direction, reading `top` and attempting a CAS to swing it to `top.next`. Again, the successful CAS is the moment the element leaves the abstract stack.

This is the Treiber stack, and it is a useful case study precisely because the linearization point is unambiguous once you know to look for it. The surrounding code, reading the current top, constructing the new node, retrying after a failed CAS, is scaffolding that sets up the conditions for the CAS to fire. The CAS itself is where the state change actually happens.

Not all structures are this straightforward. Some algorithms have linearization points that depend on the behaviour of other threads, making them conditional or deferred. These are considerably harder to prove correct and are generally treated as a signal that the design may be more complex than it needs to be.

## What linearizability actually forbids

A common misreading is that linearizability rules out concurrent overlap. It does not. Concurrent execution is the whole point of the model. What it rules out is any outcome that cannot be assigned a coherent sequential explanation.

Consider a read that overlaps with a write to the same register. Depending on where the read's linearization point falls within its execution interval, it may legitimately observe either the old value or the new value. Both outcomes are permissible, provided the full execution history can still be arranged into a consistent sequential story.

What linearizability prohibits is an outcome that no such arrangement can explain: a read returning a value that was never written, or a read returning a stale value from a write that completed before the read even began, with no overlap between them. The first fails because it references a state the system never entered. The second fails because it places a later read before an earlier write in a way that contradicts the actual timeline.

The lost-update scenario is the standard example of an execution that fails this test. Two threads read a counter at zero, both increment their local copy, and both write back one. The final value is one despite two increments. No valid sequential ordering of two increment operations produces this result, since sequential increments compose to add two regardless of order. The outcome is simply inconsistent with the sequential model, which is precisely what linearizability is designed to detect.

## The same question in distributed systems

The same correctness problem appears in distributed systems, where machines communicate by message-passing rather than shared memory, and where network latency plays the role that thread scheduling plays in concurrent programs. A client that writes a value to a distributed store and immediately reads it back expects to see what it just wrote. Whether that holds depends on the consistency model the system provides.

A linearizable distributed store is one that behaves as if there is a single authoritative copy of the data with a single global operation order, even when the actual implementation spans many machines. Reaching this guarantee typically requires coordination: a designated leader serialising writes, or a quorum of nodes acknowledging each operation before it is considered complete. The coordination adds latency, and for systems operating at scale, that cost feeds directly into architectural decisions.

Much of the decision-making in distributed database design, including the choices between Paxos, Raft, multi-master replication, and causal consistency, reflects different positions on this tradeoff. Linearizability sits at the strong end. Systems that move away from it do so deliberately, accepting weaker guarantees in exchange for lower coordination overhead, and the weakening always shifts some consistency reasoning onto the application layer.

## A more useful framing

Herlihy and Wing's paper remains a standard reference more than three decades after publication not because its formalism is particularly elaborate, but because it gave the field a precise question to ask. Rather than "does this seem to work," the question becomes: can I identify, for each operation in this execution, a single instant where it takes effect, such that the resulting sequence constitutes a valid sequential history that respects real-time ordering?

That question is useful at proof time, but it is also useful at design time. When building a concurrent data structure, it is worth being able to state, before writing the implementation, where the linearization point of each operation will be. An implementation whose linearization points cannot be clearly identified in advance usually has a correctness problem that will be difficult to find later.

---

[^1]: Herlihy, Maurice P. and Wing, Jeannette M. "Linearizability: A Correctness Condition for Concurrent Objects." *ACM Transactions on Programming Languages and Systems*, 12(3):463–492, 1990.

[^2]: Lamport, Leslie. "How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs." *IEEE Transactions on Computers*, C-28(9):690–691, 1979.

[^3]: Treiber, R. Kent. "Systems Programming: Coping with Parallelism." IBM Research Report RJ5118, 1986.