<script lang="ts">
	import Card, { Content, Actions } from '@smui/card';
	import Button, { Label } from '@smui/button';

	let clicked = 0;
	export let id: number, title: string;
</script>

<Card>
	<div class="main-content {id}">
		<Content>
			<h2>
				{title}
			</h2>
		</Content>
		<Actions>
			<Button on:click={() => clicked++}>
				<Label>Action</Label>
			</Button>
			<Button on:click={() => clicked++}>
				<Label>Another</Label>
			</Button>
		</Actions>
	</div>
</Card>

<style>
	.main-content {
		display: flex;
		justify-content: space-between;
	}
	h2 {
		margin: 5px;
	}
</style>
