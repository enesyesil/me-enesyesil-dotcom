import { writeFile } from 'fs/promises';
import path from 'path';
import { env } from '$env/dynamic/private';

const UPLOAD_DIR = path.resolve('static/uploads');

export const POST = async ({ request }) => {
    const data = await request.formData();
    const password = data.get('password');
    if (password !== env.ADMIN_PASSWORD) {
        return new Response('Unauthorized', { status: 401 });
    }
    const file = data.get('file');
    if (!(file instanceof File)) {
        return new Response('No file', { status: 400 });
    }
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const name = `${Date.now()}-${file.name}`;
    await writeFile(path.join(UPLOAD_DIR, name), buffer);
    return new Response(JSON.stringify({ path: `/uploads/${name}` }), {
        headers: { 'Content-Type': 'application/json' }
    });
};
