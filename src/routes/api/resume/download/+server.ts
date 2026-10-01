import { read } from '$app/server';
import resumePdf from '$lib/images/enes_yesil_resume.pdf';
import { incrementResumeDownloadCount } from '$lib/server/resume-counter';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		incrementResumeDownloadCount();
		const asset = read(resumePdf);
		const headers = new Headers({
			'Cache-Control': 'private, no-store',
			'Content-Disposition': 'attachment; filename="enes_yesil_resume.pdf"',
			'Content-Type': 'application/pdf',
			'X-Content-Type-Options': 'nosniff'
		});
		const contentLength = asset.headers.get('content-length');
		if (contentLength) headers.set('Content-Length', contentLength);

		return new Response(asset.body, { headers });
	} catch (error) {
		console.error('Error in download handler:', error);
		return new Response('Internal Server Error', { status: 500 });
	}
};
