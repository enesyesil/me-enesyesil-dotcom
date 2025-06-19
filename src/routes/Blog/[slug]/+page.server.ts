import matter from 'gray-matter';
import { marked } from 'marked';

const allPosts = import.meta.glob('/src/lib/posts/*.md', { as: 'raw' });

export async function load({ params }) {
  const slug = params.slug;
  const filePath = `/src/lib/posts/${slug}.md`;

  const loader = allPosts[filePath];
  if (!loader) {
    return {
      status: 404,
      error: new Error('Post not found')
    };
  }

  const raw = await loader();
  const { data, content } = matter(raw);
  const html = marked.parse(content);

  return {
    data,
    content: html
  };
}
