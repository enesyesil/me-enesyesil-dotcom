import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { env } from '$env/dynamic/private';

const POSTS_FILE = path.resolve('src/lib/server/posts.json');

async function readPosts() {
    try {
        const data = await readFile(POSTS_FILE, 'utf8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

async function writePosts(posts: any[]) {
    await writeFile(POSTS_FILE, JSON.stringify(posts, null, 2));
}

export const GET = async () => {
    const posts = await readPosts();
    return new Response(JSON.stringify(posts), {
        headers: { 'Content-Type': 'application/json' }
    });
};

export const POST = async ({ request }) => {
    const body = await request.json();
    if (body.password !== env.ADMIN_PASSWORD) {
        return new Response('Unauthorized', { status: 401 });
    }
    const posts = await readPosts();
    const id = Date.now().toString();
    posts.push({
        id,
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        image: body.image
    });
    await writePosts(posts);
    return new Response(JSON.stringify({ id }), { status: 201 });
};
