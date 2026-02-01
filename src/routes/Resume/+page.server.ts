import fs from 'fs';
import path from 'path';

export const load = async () => {
	let downloadCount = 0;
	try {
		const dataFilePath = path.join(process.cwd(), 'resume-data.json');
		if (fs.existsSync(dataFilePath)) {
			const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
			const data = JSON.parse(fileContent);
			downloadCount = data.downloads || 0;
		}
	} catch (e) {
		console.error('Error loading resume data:', e);
	}

	return {
		downloadCount
	};
};
