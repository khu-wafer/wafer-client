<script lang="ts">
	import Header from '../components/common/Header.svelte';
	import MainCard from '../components/card/MainCard.svelte';

	const CARD_INFO = [
		{
			title: 'ALL',
			subtitle: 'all goods',
			content: 'You can search all goods in WMS',
			href: '/goods/all'
		},
		{
			title: 'RECEIVING',
			subtitle: 'receiving goods',
			content: 'You can search receiving goods in WMS',
			href: '/goods/receiving'
		},
		{
			title: 'RELEASE',
			subtitle: 'released goods',
			content: 'You can search released goods in WMS',
			href: '/goods/release'
		}
	];
</script>

<Header />
<main>
	<section class="header-content">
		<h1 class="logo">wafer</h1>
		<h2 class="title">WAFER MANAGEMENT SYSTEM</h2>
		<h3 class="subtitle">Hello Admin</h3>
		<h3 class="subtitle">All goods can be searched and tracked.</h3>
	</section>
	<section class="main-content">
		{#each CARD_INFO as card}
			<div class="card-content">
				<a href={card.href}>
					<MainCard {...card} />
				</a>
			</div>
		{/each}
	</section>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: first;
		align-items: center;
	}
	.header-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.logo {
		font-size: 60px;
		font-family: 'Montserrat Alternates', sans-serif;
		background-color: #49bbed;
		color: white;
		padding: 80px 50px;
		border-radius: 50%;
		margin-top: 100px;
	}
	.subtitle {
		color: #d4d4d4;
	}
	.main-content {
		width: 80%;
		display: flex;
		justify-content: center;
		margin-top: 100px;
		padding-bottom: 100px;
	}

	.card-content {
		width: 360px;
		min-width: 360px;
		margin-right: 50px;
	}
	.card-content:last-child {
		margin-right: 0;
	}
</style>
