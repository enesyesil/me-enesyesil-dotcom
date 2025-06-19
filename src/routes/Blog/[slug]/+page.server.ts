import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export async function load({ params }) {
  const slug = params.slug;
  const filePath = path.resolve(`src/lib/posts/${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw error(404, 'Post not found');
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = matter(raw);
  const content = marked.parse(parsed.content);

  return {
    frontmatter: parsed.data,
    content
  };
}
