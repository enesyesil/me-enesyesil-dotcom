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
		longDescription:
			'Fisor Analytics empowers Canadian SMEs with predictive, AI-powered insights that uncover revenue opportunities, reduce waste, and drive strategic decision-making — without requiring a full data team. Built for SMEs, Fisor Analytics combines open public data, operational signals, and AI models to offer actionable intelligence. Our modular engines provide insights tailored to industries like logistics, construction, and real estate.',
		features: [
			'Predictive Intelligence: AI-powered insights for modern businesses',
			'Democratized Analytics: Enterprise-level intelligence for SMEs',
			'Multi-Tenant Architecture: Secure and scalable data processing',
			'Automated Insight Generation: From public and private data sources',
			'Industry-Tailored Engines: Logistics, Construction, Real Estate'
		],
		techStackDetail: [
			'Go (Golang)',
			'Python',
			'SvelteKit',
			'PostgreSQL',
			'Apache Iceberg',
			'Apache Spark',
			'Redis',
			'Azure Blob',
			'Cohere + Perplexity'
		],
		tags: ['Python', 'Spark', 'LLMs', 'Iceberg', 'Go'],
		link: 'https://fisoranalytics.org/',
		github: 'https://github.com/enesyesil/fisor-builder',
		image: '/images/new-fisor.png',
		featured: true
	},
	{
		id: 'weddify',
		title: 'Weddify',
		description:
			'Personalized wedding RSVP and invitation website with custom themes. Features customizable invitations, guest list management, and real-time RSVP tracking.',
		longDescription:
			'Weddify is a personalized wedding RSVP and invitation website. It offers the ability to create customized invitations, manage guest lists, and collect RSVPs effortlessly. A dashboard allows users to manage everything in one place, and additional customization options allow tailoring the site to specific wedding needs.',
		features: [
			'Custom Invitations: Create personalized wedding invites',
			'Guest List Management: Track RSVPs and guest details effortlessly',
			'Real-time Tracking: Instant updates on guest responses',
			'Personalized Themes: Tailor the look and feel to your wedding',
			'Dashboard: Centralized management interface'
		],
		techStackDetail: [
			'Next.js (React Framework)',
			'TailwindCSS (Styling)',
			'Supabase (Backend/Auth)',
			'Google Sheets API (Guest Management)'
		],
		tags: ['SvelteKit', 'Supabase', 'Tailwind'],
		link: '/Projects/weddify',
		image: '/images/s4.png',
		featured: true
	},
	{
		id: 'moneyball',
		title: 'Moneyball Scout ML',
		description:
			'Statistical analysis to identify undervalued football players using ML. Identifies undervalued players by analyzing performance metrics vs market value.',
		longDescription:
			'Inspired by the Moneyball philosophy, this project applies statistical analysis to football (soccer). By leveraging machine learning, we identify undervalued players whose on-field performance metrics exceed their current market valuation. This tool supports decision-making in football management, particularly in player acquisition and team building.',
		features: [
			'Uncover Value: Identify players whose market values do not reflect their true contributions',
			'Data-Driven Decisions: Statistical models for player acquisition',
			'Comprehensive Analysis: Performance, physical attributes, and historical trends',
			'Market Value Prediction: ML-based valuation estimation'
		],
		techStackDetail: ['Python', 'Pandas', 'Scikit-Learn', 'Jupyter Notebooks'],
		tags: ['Python', 'Scikit-learn', 'Pandas'],
		link: '/Projects/moneyball',
		featured: true,
		image: '/images/Soccer.jpg'
	},
	{
		id: 'my-commerce',
		title: 'My Commerce',
		description:
			'A modern, fully functional e-commerce platform with robust features including product browsing, shopping cart management, and secure order processing.',
		longDescription:
			'A fully functional e-commerce platform enabling customers to browse products, manage shopping carts, and complete orders. Built with robust role-based access control to securely separate customer shopping experiences from administrative inventory management. Includes advanced filtering, persistent carts, and an admin dashboard.',
		features: [
			'Secure Auth: User registration & login with JWT tokens',
			'Advanced Filtering: Filter by category, brand, and model',
			'Persistent Cart: Shopping cart state saved across sessions',
			'Admin Dashboard: Inventory and sales management tools',
			'Role-Based Access: Secure separation of admin and user features'
		],
		techStackDetail: [
			'Next.js (Frontend)',
			'Node.js & Express (Backend)',
			'MongoDB (Database)',
			'Tailwind CSS (Styling)',
			'Vercel & DigitalOcean (Deployment)'
		],
		tags: ['React', 'Node.js', 'MongoDB'],
		link: 'https://my-commerce-frontend.vercel.app/',
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
