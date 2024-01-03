<script context="module" lang="ts">
	import Drawer, { AppContent, Content, Header, Title, Scrim } from '@smui/drawer';
	import List, { Item, Text, Graphic } from '@smui/list';
	import type { Writable } from 'svelte/store';
</script>

<script lang="ts">
	export let open: Writable<boolean>;
	let active = '/';

	function setActive(value: string) {
		active = value;
		open.set(false);
	}
</script>

<div class="drawer-container">
	<Drawer variant="modal" fixed={false} bind:open={$open}>
		<Header>
			<Title class="text-center">¿Algo en especifico?</Title>
		</Header>
		<Content>
			<List>
				<Item href="/" on:click={() => setActive('/')} activated={active === '/'}>
					<Graphic class="material-symbols-outlined" aria-hidden="true">home</Graphic>
					<Text>Inicio</Text>
				</Item>
			</List>
		</Content>
	</Drawer>

	<Scrim fixed={false} />
	<AppContent class="app-content">
		<slot />
	</AppContent>
</div>

<style>
	.drawer-container {
		position: relative;
		display: flex;
		height: 100vh;
		overflow: hidden;
		z-index: 0;
	}

	* :global(.app-content) {
		flex: auto;
		overflow: auto;
		position: relative;
		flex-grow: 1;
	}
</style>
