import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

export const GET = () =>
	json(
		{ status: 'ok', commit: env.RELEASE_SHA || 'development' },
		{ headers: { 'Cache-Control': 'no-store' } }
	);
