<script context="module" lang="ts">
	import { page } from '$app/stores';
</script>

<script>
	const error = $page;
</script>

{#if error.status === 404}
	<div>Not Found</div>
{:else if error.status === 500}
	<div>Internal error server</div>
{/if}
