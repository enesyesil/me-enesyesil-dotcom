import { readFile } from 'fs/promises';
import path from 'path';

const POSTS_FILE = path.resolve('src/lib/server/posts.json');

export const GET = async ({ params }) => {
    const posts = JSON.parse(await readFile(POSTS_FILE, 'utf8'));
    const post = posts.find((p: any) => p.id === params.id);
    if (!post) {
        return new Response('Not found', { status: 404 });
    }
    return new Response(JSON.stringify(post), {
        headers: { 'Content-Type': 'application/json' }
    });
};
