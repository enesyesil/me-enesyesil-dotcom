export interface Project {
	id: string;
	title: string;
	description: string;
	tags: string[];
	link?: string;
	github?: string;
	image?: string;
	featured?: boolean;
	color?: string;
	// New detailed fields
	longDescription?: string;
	features?: string[];
	learnings?: string[]; // "What I Learned" or similar
	techStackDetail?: string[]; // More specific tech details
}

export const projects: Project[] = [
	{
		id: 'fisor',
		title: 'Fisor Analytics',
		description:
			'A multi-tenant AI analytics platform powered by LLMs, Spark, and Apache Iceberg for enterprise-scale data processing. Automates insight generation from public + company data.',
		tags: ['Python', 'Spark', 'LLMs', 'Iceberg', 'Go'],
		link: '/Projects/Fisor',
		github: 'https://github.com/enesyesil/fisor-builder',
		image: '/images/new-fisor.png',
		featured: true
	},
	{
		id: 'weddify',
		title: 'Weddify',
		description:
			'Personalized wedding RSVP and invitation website with custom themes. Features customizable invitations, guest list management, and real-time RSVP tracking.',
		tags: ['SvelteKit', 'Supabase', 'Tailwind'],
		link: '/Projects/Weddify',
		image: '/images/s4.png',
		featured: true
	},
	{
		id: 'moneyball',
		title: 'Moneyball Scout ML',
		description:
			'Statistical analysis to identify undervalued football players using ML. Identifies undervalued players by analyzing performance metrics vs market value.',
		tags: ['Python', 'Scikit-learn', 'Pandas'],
		link: '/Projects/Moneyball',
		featured: true,
		image: '/images/Soccer.jpg'
	},
	{
		id: 'my-commerce',
		title: 'My Commerce',
		description:
			'A modern, fully functional e-commerce platform with robust features including product browsing, shopping cart management, and secure order processing.',
		tags: ['React', 'Node.js', 'MongoDB'],
		featured: false,
		image: '/images/mycom.png'
	},

	// New Projects
	{
		id: 'docufier',
		title: 'Docufier',
		description:
			'A cross-platform desktop app that lets non-technical documentation maintainers easily create, open, and share portable Markdown-based documents.',
		longDescription:
			'Docufier makes Markdown docs behave like PDFs for technical or project manuals. It allows users to package any folder containing Markdown files into a portable .docf file which can be opened instantly with a clean, offline viewer. It integrates Docsify for beautiful rendering and supports themes, search, and sidebar navigation completely offline.',
		features: [
			'Export Documentation: Package Markdown folders into portable .docf files',
			'Offline Viewer: Instant, clean viewing without internet',
			'Docsify Integration: Sidebar navigation, search, and TOC',
			'Theme Support: Light, Dark, and System modes',
			'Native File Association: Double-click .docf files to open'
		],
		techStackDetail: [
			'Electron (Desktop Framework)',
			'Vanilla JavaScript (UI)',
			'Docsify (Markdown Rendering)',
			'Electron-Builder (Packaging)'
		],
		tags: ['TypeScript', 'Electron', 'Markdown'],
		github: 'https://github.com/enesyesil/docufier',
		link: '/Projects/docufier',
		featured: false
	},
	{
		id: 'backenderer',
		title: 'Backenderer',
		description:
			'A lightweight, plug-and-play deployment system for backend apps. Deploy to your own AWS account in minutes without managing servers.',
		longDescription:
			'Backenderer is a decentralized backend deploy kit for students and hobbyists. It uses a stateless, config-driven approach to deploy applications to AWS EC2 instances with Nginx reverse proxies. It prioritizes security with OIDC for GitHub Actions and SSM for management, eliminating the need for SSH keys.',
		features: [
			'Stateless Template: Safe to fork and reuse',
			'Terraform-based Infra: Automated EC2 + Docker + Nginx setup',
			'Secure by Default: OIDC roles, no SSH access required',
			'Config-driven Deploys: Simple YAML configuration',
			'Multi-app Hosting: Dynamic registration with Nginx routing'
		],
		techStackDetail: ['Terraform', 'AWS (EC2, SSM, IAM)', 'Docker', 'Nginx', 'GitHub Actions'],
		tags: ['Go', 'Terraform', 'AWS', 'Docker'],
		github: 'https://github.com/enesyesil/backenderer',
		link: '/Projects/backenderer',
		featured: false
	},
	{
		id: 'ckm',
		title: 'CKM (Cloud Kernel Manager)',
		description:
			'A workload orchestration system built to understand how kernel scheduling, memory management, and production infrastructure come together.',
		longDescription:
			'CKM started as a scheduler simulation and evolved into a system that executes real Docker containers with production-grade patterns. It implements various scheduling algorithms (FIFO, Round-Robin, Fair, Priority) and connects them to real-time metrics, bridging the gap between OS theory and cloud reality.',
		features: [
			'Multiple Schedulers: FIFO, Round-Robin, Fair, Priority, Multilevel',
			'Resilience Patterns: Circuit Breaker, Rate Limiter, Graceful Shutdown',
			'Real-time Observability: Prometheus metrics and Grafana dashboards',
			'Container Discovery: Automatically monitors all running Docker containers',
			'REST API: Full CRUD for workloads'
		],
		learnings: [
			"Scheduling isn't just an algorithm; the right choice depends heavily on workload type (interactive vs batch).",
			'Metrics are essential storytelling tools for system behavior, not just numbers.',
			'Production systems are about handling failure gracefully (Circuit Breakers, Rate Limits).',
			'Gap between CS theory and production systems is smaller than expected.'
		],
		techStackDetail: ['Go (Golang)', 'Docker Runtime', 'Prometheus', 'Grafana'],
		tags: ['Go', 'Systems', 'Orchestration'],
		github: 'https://github.com/enesyesil/ckm',
		link: '/Projects/ckm',
		featured: false
	},
	{
		id: 'bank-of-superior',
		title: 'Bank of Superior',
		description:
			'High-Availability AWS Solution for Centralized Identity in Banks or Umbrella companies managing newly acquired entities.',
		longDescription:
			'A multi-account AWS architecture designed to securely host multiple banks under one umbrella. It uses a Hub-and-Spoke network model with AWS Transit Gateway to ensure strict isolation between bank accounts while allowing centralized identity management and traffic inspection.',
		features: [
			'Centralized Identity: AWS IAM Identity Center (SSO)',
			'Network Isolation: Transit Gateway Hub-and-Spoke model',
			'Traffic Inspection: Central AWS Network Firewall',
			'High Availability: Multi-AZ scaling',
			'Governance: Service Control Policies (SCPs) and centralized logging'
		],
		techStackDetail: [
			'AWS Transit Gateway',
			'AWS SSO / Identity Center',
			'AWS Network Firewall',
			'AWS Organizations',
			'Terraform (optional)'
		],
		tags: ['AWS', 'Security', 'Infrastructure'],
		github: 'https://github.com/enesyesil/bank-of-superior',
		link: '/Projects/bank-of-superior',
		featured: false
	},
	{
		id: 'fisor-builder',
		title: 'Fisor Builder',
		description:
			'Research/data pipeline module converting natural language questions into structured datasets.',
		longDescription:
			'Fisor Builder is the ingestion and processing engine for Fisor Analytics. It combines LLM reasoning (Cohere) with real-time web search (Perplexity) to iteratively generate sub-queries and build validated, structured datasets from open-ended questions.',
		features: [
			'Iterative Search Loop: Query -> Search -> Parse',
			'Sub-query Generation: Uses Cohere Command R+',
			'Real-time Data: Perplexity API integration',
			'Validation: Custom confidence and schema validators',
			'Performance: JSON/Redis caching and Prometheus metrics'
		],
		techStackDetail: ['Python', 'Cohere API', 'Perplexity API', 'Docker', 'Redis'],
		tags: ['Python', 'LLMs', 'Data Pipeline'],
		github: 'https://github.com/enesyesil/fisor-builder',
		link: '/Projects/fisor-builder',
		featured: false
	}
];
