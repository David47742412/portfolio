<script context="module" lang="ts">
	import { Root, Trigger, Content } from '$lib/components/ui/tooltip';
	import { Label } from '$lib/components/ui/label';
</script>

<script lang="ts">
	export let text: string;
</script>

<Root>
	<Trigger>
		<slot />
	</Trigger>
	<Content>
		<Label>{text}</Label>
	</Content>
</Root>
