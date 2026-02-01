<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { Button, Card, Avatar } from 'flowbite-svelte';
	// import ContactMe from './ContactMe.svelte';
	import {
		Section,
		PricingBodyHead,
		PricingCard,
		PricingItemWrapper,
		PricingHead,
		PricingItem
	} from 'flowbite-svelte-blocks';
</script>

<div class="bg-amber-50">
	<Navbar />
	<div class="min-h-screen bg-white-100 dark:bg-gray-900 py-10">
		<div class="max-w-screen-lg mx-auto px-4">
			<h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-6 mt-12">
				Rabbit or Duck?: The Philosophical and Computational Insights of Bayes’ Theorem
			</h1>

			<!-- Image Section -->
			<img class="w-full mb-8 rounded-lg" src="/images/duck-rabbit.png" alt="Fisor img" />

			<!-- Introduction Section -->
			<p class="text-lg font-light text-gray-500 dark:text-gray-400 mb-14">
				Exploring the intersection of computer science and philosophy through Bayes' Theorem,
				examining how minds and machines process probability and perception.
			</p>

			<section>
				<h1 class="text-3xl font-bold mb-6">My Reflections</h1>

				<article class="mb-12">
					<h2 class="text-2xl font-semibold mb-14">1. Bayes’ Theorem</h2>
					<p class="text-lg font-light mb-14">
						I think it is very important to discuss the background of Bayes’ Theorem and its
						connection to probability. At its core, Bayes’ Theorem revolves around the concept of
						belief and its spectrum, highlighting how probabilities can represent degrees of belief
						rather than certainties. This foundation allows for a clear way to quantify and update
						our understanding of uncertain events.
					</p>
					<p class="text-lg font-light mb-14">
						Belief is not deterministic; rather, it exists on a spectrum of probabilities,
						representing varying degrees of certainty. This concept is grounded in probability
						theory, where an event space contains all possible outcomes of a scenario. Each event is
						assigned a probability value within the range of 0 to 1, where 0 indicates an impossible
						event and 1 represents absolute certainty. The total sum of probabilities for all
						possible events within this space equals 1, ensuring a complete representation.
						Additionally, the negation of an event (its complement) is calculated as 1 − 𝑃 ( 𝑒 𝑣 𝑒 𝑛
						𝑡 ), maintaining consistency within the concept.
					</p>
					<h3 class="text-xl font-semibold mb-3">What about the possibilities?</h3>
					<p class="text-lg font-light mb-14">
						I am not sure if they can be described as "even," but it is clear that the precision of
						distributed assignments is far from vague. In fact, they are more exact and structured
						compared to the basic adverbs, offering a clearer way for understanding probabilities.
					</p>

					<h3 class="text-xl font-semibold mb-8">What are the rules?</h3>
					<ol class="list-decimal ml-6 mb-14 text-lg font-light">
						<li class="mb-4">
							No possibility is measured by 0, and absolute truth is measured by 1. For example, <code
								>2 + 2 = 4</code
							> is 1.
						</li>
						<li class="mb-4">
							<code>p = 1 - q</code>, where <code>q</code> can be referred to as the negation of
							<code>p</code>.
						</li>
						<li>Conjunction and Disjunction: <code>P + Q</code> or <code>P × Q</code>.</li>
					</ol>

					<h3 class="text-xl font-semibold mb-3">What is Bayes’ Theorem?</h3>
					<p class="text-lg font-light mb-4">
						It is one of the most important theorems in probability theory and has been widely used
						in statistics.
					</p>
					<p class="text-lg font-light mb-4">
						<code>P(A|B) = (P(B|A) ⋅ P(A)) / P(B)</code>
					</p>
					<p class="text-lg font-light mb-4">
						It is especially used in evidence collection to diagnose diseases.
					</p>

					<h3 class="text-xl font-semibold mb-3">What do I think?</h3>
					<p class="text-lg font-light mb-14">
						It is crucial to grasp the fundamental relationship between the known and unknown
						properties, as this is at the core of Bayes’ Theorem. Given its extensive application
						across numerous fields over the years, developing a solid understanding of this theorem
						is not just valuable but essential. It enables us to bridge gaps in knowledge by
						systematically updating our beliefs in light of new evidence.
					</p>
				</article>

				<article>
					<h2 class="text-2xl font-semibold mb-4">2. Philosophical Approach</h2>
					<p class="text-lg font-light mb-8">
						From what I understand, Bayes’ Theorem combines statistical methodologies with
						philosophical principles to provide deeper insights into mental perception. By linking
						probabilities with human reasoning, it offers a framework to understand how we update
						our beliefs in response to new information.
					</p>

					<h3 class="text-xl font-semibold mb-3">Rabbit or Duck?</h3>
					<p class="text-lg font-light mb-4">
						This test is a clear way to show how Bayesian reasoning works. While the image itself
						does not change, a person’s perception—or the reasoning behind their conclusion—can
						change over time. This illustrates how human thought processes are dynamic, adjusting as
						new interpretations and context emerge.
					</p>
					<p class="text-lg font-light mb-4">
						An explanation of this phenomenon is that the human mind processes information with
						other mental states in a complex way.
					</p>
					<p class="text-lg font-light mb-14">
						We can delve deeper into how the human brain utilized different models of agents,
						including simple reflex agents, goal-based agents, and learning agents. These models
						provide a framework for understanding how the brain processed information, responded to
						stimuli, pursued objectives, and adapted through learning mechanisms.
					</p>

					<h3 class="text-xl font-semibold mb-6">Modular System Characteristics</h3>
					<ul class="list-disc ml-6 mb-8 text-lg font-light">
						<li class="mb-2">
							<strong>Domain Specificity:</strong> It responds to certain specific inputs.
						</li>
						<li>
							<strong>Information Encapsulation:</strong> It has no external input during the process.
						</li>
					</ul>

					<h3 class="text-xl font-semibold mb-3">Why are these facts so important?</h3>
					<p class="text-lg font-light mb-12">
						They tell us how the brain works and how processes are carried out. It might explain
						why, in the absence of certain logic or thoughts, quick perceptions persist, as there is
						no access to other properties of the brain.
					</p>
				</article>
			</section>

			<!-- More Info Section -->
			<Section name="pricing">
				<PricingHead>
					<svelte:fragment slot="h2">More Info & Links</svelte:fragment>
					<svelte:fragment slot="paragraph">Here are your options.</svelte:fragment>
				</PricingHead>
				<div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
					<PricingCard class="bg-amber-50">
						<PricingBodyHead>
							<svelte:fragment slot="h3">Website</svelte:fragment>
							<svelte:fragment slot="paragraph">Website is temporarily unavailable</svelte:fragment>
						</PricingBodyHead>
						<PricingItemWrapper>
							<svelte:fragment slot="btn">
								<a href="/" target="_blank" rel="noopener noreferrer">
									<Button color="green">Visit Website</Button>
								</a>
							</svelte:fragment>
						</PricingItemWrapper>
					</PricingCard>

					<PricingCard class="bg-amber-50">
						<PricingBodyHead>
							<svelte:fragment slot="h3">GitHub</svelte:fragment>
							<svelte:fragment slot="paragraph">Explore the repository.</svelte:fragment>
						</PricingBodyHead>
						<PricingItemWrapper>
							<svelte:fragment slot="btn">
								<a
									href="https://github.com/enesyesil/Fisor"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button color="green">Go to GitHub</Button>
								</a>
							</svelte:fragment>
						</PricingItemWrapper>
					</PricingCard>

					<PricingCard class="bg-amber-50">
						<PricingBodyHead>
							<svelte:fragment slot="h3">Email</svelte:fragment>
							<svelte:fragment slot="paragraph">Got a question? Let me know.</svelte:fragment>
						</PricingBodyHead>
						<PricingItemWrapper>
							<svelte:fragment slot="btn">
								<a href="mailto:enesy@my.yorku.ca">
									<Button color="green">Send me an email</Button>
								</a>
							</svelte:fragment>
						</PricingItemWrapper>
					</PricingCard>
				</div>
			</Section>
		</div>

		<!-- Contact Button -->
	</div>
	<Footer />
</div>
