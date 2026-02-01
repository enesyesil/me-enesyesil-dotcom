import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'resume-data.json');
const resumePath = path.join(process.cwd(), 'static', 'enes_yesil_resume.pdf');

export const GET = async ({ url, fetch }) => {
	try {
		let currentData = { downloads: 0 };

		if (fs.existsSync(dataFilePath)) {
			const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
			try {
				currentData = JSON.parse(fileContent);
			} catch (e) {
				console.error('Error parsing resume-data.json:', e);
			}
		}

		currentData.downloads += 1;

		fs.writeFileSync(dataFilePath, JSON.stringify(currentData, null, 2));

		// Fetch the file through the server's own static asset handling
		// This avoids issues with filesystem paths in different deployment environments
		const pdfResponse = await fetch(`${url.origin}/enes_yesil_resume.pdf`);

		if (!pdfResponse.ok) {
			console.error('Failed to fetch resume file:', pdfResponse.status, pdfResponse.statusText);
			return new Response('Resume file not found', { status: 404 });
		}

		const fileBuffer = await pdfResponse.arrayBuffer();

		return new Response(new Uint8Array(fileBuffer), {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': 'attachment; filename="enes_yesil_resume.pdf"'
			}
		});
	} catch (error) {
		console.error('Error in download handler:', error);
		return new Response('Internal Server Error', { status: 500 });
	}
};
