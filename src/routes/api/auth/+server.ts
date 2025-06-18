import { env } from '$env/dynamic/private';

export const POST = async ({ request }) => {
    const { password } = await request.json();
    if (password === env.ADMIN_PASSWORD) {
        return new Response('{}');
    }
    return new Response('Unauthorized', { status: 401 });
};
