import { getResumeDownloadCount } from '$lib/server/resume-counter';

export const load = async () => {
	return {
		downloadCount: getResumeDownloadCount()
	};
};
