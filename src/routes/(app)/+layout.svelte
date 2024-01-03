<script context="module" lang="ts">
	import '../../app.pcss';
	import TopBar from '$lib/components/custom/top-bar/top-bar.svelte';
	import NavBar from '$lib/components/custom/nav/nav-bar.svelte';
	import { writable } from 'svelte/store';
</script>

<script lang="ts">
	let open = writable(false);
</script>

<main class="h-[100vh] w-screen">
	<NavBar {open}>
		<div class="flex justify-center">
			<div class="max-w-[95%] flex-1">
				<TopBar {open} />
				<slot />
			</div>
		</div>
	</NavBar>
</main>
