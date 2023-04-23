<script lang="ts">
	import { onMount } from 'svelte';

	import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button';
	import Textfield from '@smui/textfield';
	import Snackbar, { Actions, Label as SnackbarLabel } from '@smui/snackbar';

	export let form;

	let id = '';
	let password = '';

	let snackbarWithClose: Snackbar;

	onMount(() => {
		if (form?.message) snackbarWithClose.open();
	});
</script>

<main>
	<div class="logo">Wafer</div>
	<h1 class="title">LOGIN</h1>
	<h2 class="sub-title">Wafer Management Sysytem</h2>
	<form class="login-form" method="POST">
		<Textfield
			type="text"
			variant="outlined"
			bind:value={id}
			input$name="id"
			label="ID"
			required
			style="width: 100%; height: 50px;"
		/>
		<Textfield
			type="password"
			variant="outlined"
			bind:value={password}
			input$name="password"
			label="PASSWORD"
			required
			style="width: 100%; height: 50px;"
		/>
		<Button type="submit" variant="outlined">
			<Label>Login</Label>
		</Button>
	</form>
	<Snackbar bind:this={snackbarWithClose} class="demo-error">
		<SnackbarLabel>{form?.message}</SnackbarLabel>
		<Actions>
			<IconButton class="material-icons" title="Dismiss">close</IconButton>
		</Actions>
	</Snackbar>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.logo {
		font-size: 60px;
		font-family: 'Montserrat Alternates', sans-serif;
		background-color: #49bbed;
		color: white;
		padding: 80px 50px;
		border-radius: 50%;
	}

	.title {
		width: 390px;
		text-align: start;
		margin-top: 50px;
	}

	.sub-title {
		width: 390px;
		text-align: start;
	}

	.login-form {
		width: 390px;
		height: 180px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
