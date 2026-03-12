export function GET({ url }) {
	const title = url.searchParams.get('title') || 'Untitled';
	const category = url.searchParams.get('category') || 'Post';

	// Split title into lines so it doesn't overflow horizontally
	// Simple word wrapping
	const words = title.split(' ');
	const lines = [];
	let currentLine = '';

	for (const word of words) {
		if ((currentLine + ' ' + word).length > 25) {
			lines.push(currentLine);
			currentLine = word;
		} else {
			currentLine = currentLine === '' ? word : currentLine + ' ' + word;
		}
	}
	if (currentLine) {
		lines.push(currentLine);
	}

	const height = 630;
	const width = 1200;
	const startY = height / 2 - (lines.length * 60) / 2;

	let textElements = '';
	lines.forEach((line, index) => {
		textElements += `<text x="50%" y="${startY + index * 70}" dominant-baseline="middle" text-anchor="middle" font-family="monospace, sans-serif" font-weight="bold" font-size="64" fill="white">${line}</text>\n`;
	});

	// The green background svg string
	const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#064e3b" />
                <stop offset="100%" stop-color="#047857" />
            </linearGradient>
            
            <!-- Grid pattern for a subtle "developer/terminal" aesthetic -->
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-opacity="0.05" stroke-width="1"/>
            </pattern>
        </defs>

        <!-- Background -->
        <rect width="100%" height="100%" fill="url(#bg)" />
        <rect width="100%" height="100%" fill="url(#grid)" />

        <!-- Border -->
        <rect x="20" y="20" width="${width - 40}" height="${height - 40}" fill="none" stroke="white" stroke-opacity="0.2" stroke-width="4" />

        <!-- Category Badge -->
        <rect x="60" y="60" width="auto" height="40" fill="transparent" />
        <text x="60" y="90" font-family="monospace, sans-serif" font-weight="bold" font-size="24" fill="#a7f3d0" letter-spacing="2">
            [${category.toUpperCase()}]
        </text>

        <!-- Title -->
        ${textElements}
    </svg>`;

	return new Response(svg, {
		headers: {
			'Content-Type': 'image/svg+xml',
			'Cache-Control': 'public, max-age=86400'
		}
	});
}
