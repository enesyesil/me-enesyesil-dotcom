<script>
	import { Progressbar } from 'flowbite-svelte';
</script>

<section class="bg-amber-50 px-4 py-16 w-full">
	<div class="max-w-4xl mx-auto px-4">
		<h2 class="text-3xl text-center font-bold mb-12">Key Skills</h2>

		<!-- Frontend -->
		<h3 class="text-2xl font-semibold mt-12 mb-6 text-gray-800">Frontend</h3>
		<div class="space-y-4">
			<div>
				<label for="html" class="block text-lg">HTML</label>
				<Progressbar progress="90" id="html" color="green" />
			</div>
			<div>
				<label for="css" class="block text-lg">CSS</label>
				<Progressbar progress="70" id="css" color="green" />
			</div>
			<div>
				<label for="svelte" class="block text-lg">Svelte</label>
				<Progressbar progress="85" id="svelte" color="green" />
			</div>
			<div>
				<label for="react" class="block text-lg">React</label>
				<Progressbar progress="75" id="react" color="green" />
			</div>
			<div>
				<label for="tailwind" class="block text-lg">Tailwind</label>
				<Progressbar progress="80" id="tailwind" color="green" />
			</div>
		</div>

		<!-- Backend -->
		<h3 class="text-2xl font-semibold mt-12 mb-6 text-gray-800">Backend</h3>
		<div class="space-y-4">
			<div>
				<label for="spring" class="block text-lg">Spring Boot</label>
				<Progressbar progress="75" id="spring" color="green" />
			</div>
			<div>
				<label for="node" class="block text-lg">Node.js</label>
				<Progressbar progress="70" id="node" color="green" />
			</div>
			<div>
				<label for="fastapi" class="block text-lg">FastAPI</label>
				<Progressbar progress="70" id="fastapi" color="green" />
			</div>
			<div>
				<label for="go" class="block text-lg">Fiber(Golang)</label>
				<Progressbar progress="75" id="go" color="green" />
			</div>
		</div>

		<!-- Programming Languages -->
		<h3 class="text-2xl font-semibold mt-12 mb-6 text-gray-800">Languages</h3>
		<div class="space-y-4">
			<div>
				<label for="java" class="block text-lg">Java</label>
				<Progressbar progress="90" id="java" color="green" />
			</div>
			<div>
				<label for="go" class="block text-lg">Go (Golang)</label>
				<Progressbar progress="65" id="go" color="green" />
			</div>
			<div>
				<label for="javascript" class="block text-lg">JavaScript</label>
				<Progressbar progress="80" id="javascript" color="green" />
			</div>
			<div>
				<label for="python" class="block text-lg">Python</label>
				<Progressbar progress="80" id="python" color="green" />
			</div>
			<div>
				<label for="typescript" class="block text-lg">TypeScript</label>
				<Progressbar progress="80" id="typescript" color="green" />
			</div>
			<div>
				<label for="c" class="block text-lg">C</label>
				<Progressbar progress="70" id="c" color="green" />
			</div>
			<div>
				<label for="bash" class="block text-lg">Bash / Shell</label>
				<Progressbar progress="65" id="bash" color="green" />
			</div>
		</div>

		<!-- Cloud & DevOps -->
		<h3 class="text-2xl font-semibold mt-12 mb-6 text-gray-800">Cloud & DevOps</h3>
		<div class="space-y-4">
			<div>
				<label for="aws" class="block text-lg">AWS</label>
				<Progressbar progress="80" id="aws" color="green" />
			</div>
			<div>
				<label for="azure" class="block text-lg">Azure</label>
				<Progressbar progress="70" id="azure" color="green" />
			</div>
			<div>
				<label for="docker" class="block text-lg">Docker</label>
				<Progressbar progress="75" id="docker" color="green" />
			</div>
			<div>
				<label for="terraform" class="block text-lg">Terraform</label>
				<Progressbar progress="65" id="terraform" color="green" />
			</div>
			<div>
				<label for="github" class="block text-lg">GitHub Actions</label>
				<Progressbar progress="85" id="github" color="green" />
			</div>
		</div>

		<!-- Tools & Databases -->
		<h3 class="text-2xl font-semibold mt-12 mb-6 text-gray-800">Tools & Databases</h3>
		<div class="space-y-4">
			<div>
				<label for="postgresql" class="block text-lg">Postgres</label>
				<Progressbar progress="80" id="postgresql" color="green" />
			</div>

			<div>
				<label for="redis" class="block text-lg">Redis</label>
				<Progressbar progress="70" id="redis" color="green" />
			</div>
			<div>
				<label for="git" class="block text-lg">Git</label>
				<Progressbar progress="85" id="git" color="green" />
			</div>
			<div>
				<label for="prometheus" class="block text-lg">Prometheus + Grafana</label>
				<Progressbar progress="65" id="prometheus" color="green" />
			</div>
			<div>
				<label for="iceberg" class="block text-lg">Apache Iceberg</label>
				<Progressbar progress="75" id="iceberg" color="green" />
			</div>
			<div>
				<label for="spark" class="block text-lg">Apache Spark</label>
				<Progressbar progress="65" id="spark" color="green" />
			</div>
		</div>
	</div>
</section>
