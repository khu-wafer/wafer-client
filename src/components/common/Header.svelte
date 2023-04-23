<script lang="ts">
	import IconButton from '@smui/icon-button';
	import Drawer, { AppContent, Content, Header, Title, Scrim } from '@smui/drawer';
	import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
	import Tab, { Label as TabLabel } from '@smui/tab';
	import TabBar from '@smui/tab-bar';

	const NAVIGATION_TITLES = ['All', 'Receiving', 'Release'];

	let active = '';
	let open = false;
	let drawerActive = 'Inbox';

	function setActive(value: string) {
		drawerActive = value;
		open = false;
	}
</script>

<Drawer variant="modal" bind:open>
	<Header>
		<Title>WAFER WMS</Title>
		<!-- <Subtitle>It's the best fake mail app drawer.</Subtitle> -->
	</Header>
	<Content>
		<List>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Inbox')}
				activated={active === 'Inbox'}
			>
				<Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
				<Text>Inbox</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Star')}
				activated={active === 'Star'}
			>
				<Graphic class="material-icons" aria-hidden="true">star</Graphic>
				<Text>Star</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Sent Mail')}
				activated={active === 'Sent Mail'}
			>
				<Graphic class="material-icons" aria-hidden="true">send</Graphic>
				<Text>Sent Mail</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Drafts')}
				activated={active === 'Drafts'}
			>
				<Graphic class="material-icons" aria-hidden="true">drafts</Graphic>
				<Text>Drafts</Text>
			</Item>

			<Separator />
			<Subheader tag="h6">Labels</Subheader>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Family')}
				activated={active === 'Family'}
			>
				<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
				<Text>Family</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Friends')}
				activated={active === 'Friends'}
			>
				<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
				<Text>Friends</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Work')}
				activated={active === 'Work'}
			>
				<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
				<Text>Work</Text>
			</Item>
		</List>
	</Content>
</Drawer>
<Scrim on:click={() => (open = !open)} />
<AppContent>
	<header>
		<nav>
			<h1 class="title">
				<a class="link" href="/">Wafer</a>
			</h1>
			<TabBar tabs={NAVIGATION_TITLES} let:tab bind:active>
				<div class="tab">
					<a href={`/goods/${tab.toLowerCase()}`}>
						<Tab {tab}>
							<TabLabel>
								{tab}
							</TabLabel>
						</Tab>
					</a>
				</div>
			</TabBar>
			<IconButton class="material-icons" on:click={() => (open = !open)}>menu</IconButton>
		</nav>
	</header>
</AppContent>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 20px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
	}

	.title {
		font-family: 'Montserrat Alternates', sans-serif;
		font-size: 40px;
		margin: 0;
	}

	.tab {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
