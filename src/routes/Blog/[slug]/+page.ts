// src/routes/Blog/[slug]/+page.ts
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import matter from 'gray-matter';

interface Frontmatter {
  title: string;
  date?: string;
  image?: string;
  description?: string;
}

export async function load({ params }) {
  try {
    const raw = await import(`../../../lib/posts/${params.slug}.md?raw`);
    const parsed = matter(raw.default);
    const content = marked.parse(parsed.content);
    const frontmatter = parsed.data as Frontmatter;

    return {
      frontmatter,
      content
    };
  } catch (e) {
    throw error(404, 'Post not found');
  }
}
