<script lang="ts">
	import Sidebar from '../../../components/common/Sidebar.svelte';
	import ObjectCard from '../../../components/card/ObjectCard.svelte';
	import LineCard from '../../../components/card/LineCard.svelte';
	import { CARD_MOCKS } from '../../../constants/mocks/mocks';

	import Switch from '@smui/switch';
	import FormField from '@smui/form-field';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';

	let objectMode = false;
	let searchValue = '';
</script>

<main>
	<Sidebar title="Release" />
	<section class="main-content">
		<div class="adjustment">
			<div class="search-bar">
				<Textfield
					class="shaped-outlined"
					variant="outlined"
					bind:value={searchValue}
					label="Search"
					style="height: 40px;"
				>
					<Icon class="material-icons" slot="trailingIcon">search</Icon>
				</Textfield>
			</div>
			<div class="objectMode-toggle">
				<FormField>
					<Switch bind:checked={objectMode} icons={false} />
					<span slot="label">{objectMode ? 'Object' : 'Line'}</span>
				</FormField>
			</div>
		</div>
		<ul class="card-list">
			{#each CARD_MOCKS as card}
				<li class="card-item">
					{#if objectMode}
						<ObjectCard {...card} />
					{:else}
						<LineCard {...card} />
					{/if}
				</li>
			{/each}
		</ul>
	</section>
</main>
<div />

<style>
	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading) {
		border-radius: 28px 0 0 28px;
		width: 28px;
	}

	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing) {
		border-radius: 0 28px 28px 0;
	}
	main {
		width: 100%;
		display: flex;
		padding: 20px 120px;
		box-sizing: border-box;
	}
	.adjustment {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
		padding: 10px 15px;
	}
	.main-content {
		width: 70%;
		margin-top: 20px;
		border-top: 1px solid black;
	}
	.objectMode-toggle {
		text-align: right;
	}
	.card-list {
		padding: 0;
	}
	.card-item {
		margin-top: 20px;
		list-style: none;
	}
</style>
