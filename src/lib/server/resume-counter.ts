import fs from 'node:fs';
import path from 'node:path';

const dataFilePath = process.env.RESUME_DATA_PATH || path.join(process.cwd(), 'resume-data.json');

function readDownloadCount(): number {
	try {
		if (!fs.existsSync(dataFilePath)) return 0;

		const parsed: unknown = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
		if (
			typeof parsed === 'object' &&
			parsed !== null &&
			'downloads' in parsed &&
			typeof parsed.downloads === 'number' &&
			Number.isSafeInteger(parsed.downloads) &&
			parsed.downloads >= 0
		) {
			return parsed.downloads;
		}
	} catch (error) {
		console.error('Unable to read the resume download counter:', error);
	}

	return 0;
}

export function getResumeDownloadCount(): number {
	return readDownloadCount();
}

export function incrementResumeDownloadCount(): number {
	const downloads = readDownloadCount() + 1;

	try {
		fs.mkdirSync(path.dirname(dataFilePath), { recursive: true });
		fs.writeFileSync(dataFilePath, JSON.stringify({ downloads }, null, 2), {
			encoding: 'utf8',
			mode: 0o600
		});
	} catch (error) {
		// A counter failure must never prevent the public resume download.
		console.error('Unable to update the resume download counter:', error);
	}

	return downloads;
}
