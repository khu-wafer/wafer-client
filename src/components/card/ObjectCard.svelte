<script lang="ts">
	import Card, { Content, PrimaryAction, Actions, ActionButtons, ActionIcons } from '@smui/card';
	import Button, { Label } from '@smui/button';
	import IconButton, { Icon } from '@smui/icon-button';

	let clicked = 0;

	export let id: number,
		title: string,
		warehousingDate: string,
		releaseDate: string,
		departures: string,
		arrivals: string,
		imgUrl: string;
</script>

<Card>
	<PrimaryAction on:click={() => clicked++}>
		<div class="main-content {id}">
			<Content class="mdc-typography--body2">
				<h2 class="mdc-typography--headline6" style="margin: 0;">{title}</h2>
				<h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; color: #888;">
					{warehousingDate} / {releaseDate}
				</h3>
				<h4>Departure</h4>

				{departures}

				<h4>Arrivals</h4>
				{arrivals}
			</Content>
			<img src={imgUrl} alt="dummy" width="35%" height="200px" />
		</div>
	</PrimaryAction>
	<Actions>
		<ActionButtons>
			<Button on:click={() => clicked++}>
				<Label>Action</Label>
			</Button>
			<Button on:click={() => clicked++}>
				<Label>Another</Label>
			</Button>
		</ActionButtons>
		<ActionIcons>
			<IconButton
				on:click={() => clicked++}
				toggle
				aria-label="Add to favorites"
				title="Add to favorites"
			>
				<Icon class="material-icons" on>favorite</Icon>
				<Icon class="material-icons">favorite_border</Icon>
			</IconButton>
			<IconButton class="material-icons" on:click={() => clicked++} title="Share">share</IconButton>
			<IconButton class="material-icons" on:click={() => clicked++} title="More options"
				>more_vert</IconButton
			>
		</ActionIcons>
	</Actions>
</Card>

<style>
	h4 {
		margin: 7px 0;
	}
	.main-content {
		display: flex;
		justify-content: space-between;
	}
</style>
