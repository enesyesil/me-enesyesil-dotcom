import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'resume-data.json');
const resumePath = path.join(process.cwd(), 'static', 'enes_yesil_resume.pdf');

export const GET = async () => {
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

		if (fs.existsSync(resumePath)) {
			const file = fs.readFileSync(resumePath);
			return new Response(new Uint8Array(file), {
				headers: {
					'Content-Type': 'application/pdf',
					'Content-Disposition': 'attachment; filename="enes_yesil_resume.pdf"'
				}
			});
		} else {
			// Fallback if file not found (shouldn't happen)
			return new Response('Resume file not found', { status: 404 });
		}
	} catch (error) {
		console.error('Error in download handler:', error);
		return new Response('Internal Server Error', { status: 500 });
	}
};
