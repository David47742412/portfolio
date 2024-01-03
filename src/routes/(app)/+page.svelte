<script context="module" lang="ts" xmlns="http://www.w3.org/1999/html">
	import { Label } from '$lib/components/ui/label';
	import ToolTip from '$lib/components/custom/tooltip/tooltip.svelte';
</script>

<script lang="ts">
	const birthdate = new Date('2004-12-26');
	const now = new Date();
	let currentAge = now.getFullYear() - birthdate.getFullYear() - 1;

	if (birthdate.getMonth() < now.getMonth()) {
		currentAge = now.getFullYear() - birthdate.getFullYear();
	}
</script>

<svelte:head>
	<title>Inicio</title>
</svelte:head>

<div class="mt-[30px]">
	<div class="flex flex-col sm:flex-row sm:justify-between">
		<div class="mb-[15px] flex-1 sm:mb-auto">
			<div class="flex items-center justify-center">
				<Label class="text-wrap text-[1em]">
					¡Hola!, Mi nombre es Darwin David Castro Astudillo. Actualmente, tengo {currentAge} años y
					he trabajado en el desarrollo de diversos proyectos personales, incluyendo aplicaciones web,
					móviles y de escritorio. Esta experiencia ha sido fundamental para ampliar mis conocimientos
					profesionales.
				</Label>
			</div>
		</div>
		<div class="flex flex-1 justify-center text-center">
			<div class="gap-2">
				<img
					class="h-[8em] w-[8em] rounded-full"
					src="/image/profile/profile-github.png"
					alt="photo"
					draggable="false"
				/>
				<div class="mt-2 flex items-center justify-center gap-2">
					<ToolTip text="Github">
						<a href="https://github.com/David47742412" target="_blank">
							<img
								class="h-[2em] w-[2em] rounded-full"
								src="/image/icon/github-logo.svg"
								alt="github"
							/>
						</a>
					</ToolTip>
				</div>
			</div>
		</div>
	</div>
	<section>
		<div class="mb-[20px] mt-[20px] text-center underline">
			<Label class="text-xl">Lenguajes manejados</Label>
		</div>
		<div class="flex items-center justify-center">
			<div class="grid flex-col gap-2 md:w-[70%] md:grid-cols-4 md:flex-row">
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">C++</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/lang/cpp.png"
						alt="c++"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Javascript</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/lang/javascript.png"
						alt="javascript"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Typescript</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/lang/typescript.png"
						alt="typescript"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Kotlin</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/lang/kotlin.svg"
						alt="kotlin"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Java</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/lang/java.svg"
						alt="java"
						draggable="false"
					/>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Csharp</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/lang/csharp.webp"
						alt="csharp"
						draggable="false"
					/>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">SQL & T-SQL</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/lang/sql.png"
						alt="sql"
						draggable="false"
					/>
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="mb-[20px] mt-[20px] text-center underline">
			<Label class="text-xl">Frameworks manejados</Label>
		</div>
		<div class="flex items-center justify-center">
			<div class="grid flex-col gap-2 md:w-[70%] md:grid-cols-4 md:flex-row">
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Drogon C++</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/frameworks/drogon-cpp.png"
						alt="drogon c++"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Nest js</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/frameworks/nestjs.svg"
						alt="nest js"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Next js</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/frameworks/nextjs.svg"
						alt="Next js"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Svelte kit</Label>
					<img
						class="h-[10em] w-[9em] rounded-[1em]"
						src="/image/frameworks/svelte.png	"
						alt="svelte kit"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Angular</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/frameworks/angular.png"
						alt="angular"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">spring</Label>
					<img
						class="h-[10em] w-[15em] rounded-[1em]"
						src="/image/frameworks/spring.png"
						alt="spring tools"
						draggable="false"
					/>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">asp.net</Label>
					<img
						class="h-[10em] w-[14em] rounded-[1em]"
						src="/image/frameworks/asp.net.png"
						alt="asp.net"
						draggable="false"
					/>
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="mb-[20px] mt-[20px] text-center underline">
			<Label class="text-xl">Base de datos manejados</Label>
		</div>
		<div class="flex items-center justify-center">
			<div class="grid flex-col gap-2 md:w-[70%] md:grid-cols-4 md:flex-row">
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Sql server</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/database/sql-server.svg"
						alt="Sql server"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Postgresql</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/database/postgresql.png"
						alt="Postgresql"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">MariaDB</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/database/mariadb.png"
						alt="mariadb"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Mysql</Label>
					<img
						class="h-[10em] w-[14em] rounded-[1em]"
						src="/image/database/mysql.png"
						alt="mysql"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">SqLite</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/lang/sql.png"
						alt="SqLite"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Mongodb</Label>
					<img
						class="h-[10em] w-[15em] rounded-[1em]"
						src="/image/database/mongodb.png"
						alt="mongodb"
						draggable="false"
					/>
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="mb-[20px] mt-[20px] text-center">
			<Label class="text-xl underline">Sistemas operativos</Label>
			<span>new</span>
		</div>
		<div class="flex items-center justify-center">
			<div class="grid flex-col gap-2 md:w-[70%] md:grid-cols-4 md:flex-row">
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Ubuntu linux</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/system/ubuntu.png"
						alt="Ubuntu linux"
						draggable="false"
					/>
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="mb-[20px] mt-[20px] text-center">
			<Label class="text-xl underline">Paneles de hosting & conexiones remotas</Label>
		</div>
		<div class="flex items-center justify-center">
			<div class="grid flex-col gap-2 md:w-[70%] md:grid-cols-4 md:flex-row">
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Cpanel</Label>
					<img
						class="h-[10em] w-[14em] rounded-[1em]"
						src="/image/panel/cpanel.png"
						alt="Cpanel"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Plesk</Label>
					<img
						class="h-[10em] w-[10em] rounded-[1em]"
						src="/image/panel/plesk.png"
						alt="Plesk"
						draggable="false"
					/>
				</div>
				<div class="mb-2 flex flex-col items-center justify-center gap-2">
					<Label class="mb-2">Ssh</Label>
					<img
						class="h-[8em] w-[9em] rounded-[1em]"
						src="/image/terminal/ssh.png"
						alt="ssh"
						draggable="false"
					/>
				</div>
			</div>
		</div>
	</section>
</div>
