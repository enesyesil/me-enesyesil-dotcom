import { marked } from 'marked';
import matter from 'gray-matter';

export async function load() {
  const imports = import.meta.glob('/src/lib/posts/*.md', {
    query: '?raw',
    import: 'default'
  });

  const posts = [];

  for (const path in imports) {
    const raw = await imports[path]() as string;
    const { data } = matter(raw);
    posts.push({ ...data, slug: path.split('/').pop()?.replace('.md', '') });
  }

  return { posts };
}
