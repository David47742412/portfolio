<script context="module" lang="ts">
	import { Label } from '$lib/components/ui/label';
	import ToolTip from '$lib/components/custom/tooltip/tooltip.svelte';
</script>

<script lang="ts">
	const birthdate = new Date('2004-12-26');
	const now = new Date();
</script>

<div class="mt-[20px] flex flex-col sm:flex-row sm:justify-between">
	<div class="mb-[15px] flex-1 sm:mb-auto">
		<div>
			<Label class="text-wrap text-[1em]"
				>¡Hola!, Mi Nombre es Darwin David Castro Astudillo, Tengo actualmente {now.getFullYear() -
					birthdate.getFullYear()}, he desarrollado diferentes tipos de proyectos personales, web,
				móvil, Escritorio.<br />
				Lo cual me ha permitido expandir mis conocimientos profesionales.
			</Label>
		</div>
	</div>
	<div class="flex flex-1 justify-center text-center">
		<div class="gap-2">
			<img
				class="h-[8em] w-[8em] rounded-full"
				src="/image/profile/profile-github.png"
				alt="photo"
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
