<script context="module" lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import type { Writable } from 'svelte/store';
</script>

<script lang="ts">
	export let open: Writable<boolean>;

	let now: string = new Date().toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true
	});

	setInterval(() => {
		now = new Date().toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: true
		});
	}, 1000);
</script>

<div
	class="mt-[10px] flex items-center justify-between rounded border border-gray-50 p-[15px] shadow-2xl"
>
	<Button
		class="material-symbols-outlined"
		on:click={() => {
			open.set(true);
		}}
		>menu
	</Button>
	<Label class="text-center text-[1em]">{now}</Label>
</div>
