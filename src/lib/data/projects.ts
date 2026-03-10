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
		featured: false
	},
	{
		id: 'issuesight',
		title: 'IssueSight',
		description:
			'A distributed, event-driven platform that bridges the gap between complex open-source issues and junior contributors using AI-driven mentorship.',
		longDescription:
			'IssueSight solves the context-switching problem in open source. It ingests GitHub issues and uses LLMs to decompose complex tickets into junior-level prerequisites, architectural summaries, and implementation guides. Built as a distributed system with a vertical microservices layering pattern.',
		features: [
			'Context Bridges: Breaks down complex issues for junior devs',
			'Distributed Architecture: Vertical microservices (Gateway, Collector, AI Worker)',
			'Event-Driven: Redis Streams for async processing and locks',
			'Vertical Layering: Strict separation of Client, Gateway, Logic, and Data layers',
			'AI Mentorship: Generates prerequisites and architectural context'
		],
		techStackDetail: [
			'Go (Gateway, Microservices)',
			'Next.js (Frontend)',
			'Redis (Streams, Cache, Distributed Locks)',
			'MongoDB (Auth & Quotas)',
			'PostgreSQL (Archives)',
			'LLMs (GPT-4o/5)'
		],
		tags: ['Go', 'Microservices', 'Redis', 'LLMs'],
		github: 'https://github.com/enesyesil/issuesight',
		link: '/Projects/issuesight',
		featured: true,
		image: '/images/issuesight-img.png'
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
		id: 'self-hosted-platform',
		title: 'Personal Self-Hosted Deployment Platform',
		description:
			'A self-hosted personal PaaS on a Hetzner VPS using Dokploy to reliably run apps, databases, automation, and AI services end-to-end.',
		longDescription:
			'I moved off Vercel Pro and built a self-hosted deployment setup on a Hetzner VPS using Dokploy. The goal was to own the full deployment pipeline end-to-end (apps, domains, SSL, databases, automation, and AI services) while keeping deployments repeatable and cost predictable.\n\n### Why I Built This (Reasoning)\nManaged platforms like Vercel optimize for speed and convenience, but they come with tradeoffs once you move beyond a single frontend: costs grow when you need always-on backends, databases, and background jobs; less control over networking, storage, and system-level behavior; and it is harder to host multiple services (automation + DB + AI inference) in one place.\n\nI wanted a setup where I can run multiple services on one VPS, keep cost stable and predictable, control networking, storage, secrets, and deployments end-to-end, and get hands-on practice operating systems the way real teams do in production.\n\n### What I Built\nA small "personal PaaS" running on a single VPS. It consists of a compute layer (Hetzner VPS), deployment layer (Dokploy), runtime (Docker containers per service), data layer (PostgreSQL, Redis, MongoDB, ClickHouse for experimentation), an AI service (Ollama via HTTP API), and self-hosted documentation tools for my personal projects and my volunteer work at Young Professionals Canada. It also includes my own custom applications running behind custom subdomains and SSL HTTPS routing.\n\n### Cost and Infrastructure (Hetzner VPS)\n- **Specs:** 3 vCPU, 4 GB RAM, 80 GB SSD.\n- **Pricing:** $9.99 / month (Current usage cost shown: $7.37)\n- **Location:** Ashburn, VA (us-east)\n- **Network and Security:** Hetzner Firewall enabled with restricted inbound rules.\n\n### Next Steps (Planned Deployments)\nI’m continuing this as an infrastructure learning track. The next phase is focused on running real distributed patterns instead of a single-host setup.\n\n**Docker Swarm cluster**\nBuild a small Swarm cluster (manager + workers), practice rolling deploys, service discovery, overlay networking, and failover behavior, and re-run the same platform services under Swarm to see what breaks and why.\n\n**Database replication and sharding experiments**\nReplication: learn availability tradeoffs and failure modes (promotion, split brain risk, recovery). Sharding: learn partitioning tradeoffs (routing, hotspots, rebalancing, operational complexity). The goal is not "production grade sharding" on day one, but learning the real operational pain points.\n\n**Deploying <a href="/Projects/issuesight" class="text-primary-600 dark:text-primary-400 hover:underline">IssueSight</a> on Swarm (Distributed architecture validation)**\nI’ll deploy <a href="/Projects/issuesight" class="text-primary-600 dark:text-primary-400 hover:underline">IssueSight</a> on Swarm to validate the system under real distributed conditions since it is a distributed event-driven system. Swarm is the right next step because it forces real questions: can services be replicated safely, what state must be single vs multi-writer, what fails when a replica dies mid-task, and how to prevent duplicate processing.',
		features: [
			'Cal.com (Self-hosted scheduling): Configured env vars, routed via subdomain, enabled HTTPS.',
			'n8n (Automation): Backed by persistent DB to ensure workflows survive restarts. Connects APIs and webhooks.',
			'PostgreSQL (Relational DB): Persistent storage mounted to prevent data loss. Separate DBs per service.',
			'Redis (Cache): Low-latency caching, shared state, fast reads, and distributed locking experiments.',
			'MongoDB (Document DB): Testing document modeling tradeoffs in a real deployment environment.',
			'ClickHouse (Analytics): Experimenting with analytics-style storage and querying.',
			'Ollama (Local LLM inference): Pulled models on demand and exposed them via an internal API.',
			'Documentation Tools: Self-hosted apps for documenting projects and volunteer work at YPC.'
		],
		learnings: [
			'Left managed hosting and provisioned a Hetzner VPS with strict firewall rules and secure SSH access.',
			'Installed Dokploy to manage deployments, logs, env vars, and domains centrally from one place.',
			'Connected custom domains, pointed DNS to the VPS, and enabled SSL certificates for all routes.',
			'Deployed stateful persistence (Postgres, MongoDB, Redis, ClickHouse) via Docker with mounted volumes.',
			'Deployed internal apps (n8n, Cal.com, Ollama) and confirmed API, workflow, and routing health.'
		],
		techStackDetail: [
			'Hetzner VPS',
			'Dokploy',
			'Docker / Containers',
			'PostgreSQL',
			'Redis & MongoDB',
			'ClickHouse',
			'Ollama (AI)',
			'n8n (Automation)',
			'Cal.com'
		],
		tags: ['Infra', 'Self-Hosted', 'Docker', 'VPS'],
		link: '/Projects/self-hosted-platform',
		featured: true,
		image: '/images/self-hosted-img.png'
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
		featured: false
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
		featured: true
	},

	/*
		{
			id: 'deck-me',
			title: 'Deck-Me',
			description:
				'A local-first macOS desktop app that transforms any topic into a beautiful, research-backed presentation using AI.',
			longDescription:
				'Deck-Me combines deep research with visual storytelling. It uses a multi-provider AI system to research topics, plan visually compelling slides, fetch licensed media from Wikimedia, and render presentation-ready decks. Designed with a local-first architecture for security and privacy.',
			features: [
				'AI Research Agent: Multi-provider research with depth control',
				'Local-First: Secure key storage in macOS Keychain',
				'Smart Media: Auto-fetches licensed images from Wikimedia Commons',
				'Live Preview: Real-time Reveal.js rendering',
				'Export: High-quality PDF export'
			],
			techStackDetail: [
				'Electron & Tauri (Desktop)',
				'FastAPI (Backend)',
				'Reveal.js (Renderer)',
				'Python (Research Engine)',
				'Docker'
			],
			tags: ['Electron', 'FastAPI', 'Python', 'AI'],
			github: 'https://github.com/enesyesil/deck-me',
			link: '/Projects/deck-me',
			featured: false,
			image: '/images/deck-me-img.png'
		},
	*/
	{
		id: 'atlas-fabric',
		title: 'AtlasFabric',
		description:
			'A temporal boundary generation engine that reconstructs historical political maps using open base units and AI classification.',
		longDescription:
			'AtlasFabric is an experimental engine that attempts to solve the lack of open historical boundary datasets. It uses modern administrative polygons as building blocks, assigns them to historical entities using LLMs, and validates them deterministically to generate MapLibre-compatible historical maps.',
		features: [
			'Temporal Modeling: Reconstructs boundaries for specific years',
			'Base Unit Aggregation: Uses modern admin polygons as atomic units',
			'LLM Classification: AI-assisted historical entity assignment',
			'MapLibre Compatible: Generates standard vector/geojson outputs',
			'Deterministic Validation: Enforces topological consistency'
		],
		techStackDetail: [
			'MapLibre GL JS',
			'Python (Processing Engine)',
			'LLMs (Classification)',
			'PostGIS / Spatial DB',
			'GeoJSON'
		],
		tags: ['Maps', 'Data Engineering', 'LLMs', 'History'],
		github: 'https://github.com/enesyesil/atlas-fabric',
		link: '/Projects/atlas-fabric',
		featured: false
	}
];
