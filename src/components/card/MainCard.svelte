<script lang="ts">
	import Card, { Content, PrimaryAction } from '@smui/card';

	export let title: string, subtitle: string, content: string;
</script>

<Card>
	<PrimaryAction>
		<div>
			<div
				style="display:flex; justify-content:center; align-items: center; background-color: #DDDDDD; width:100%; height:150px;"
			>
				<div style="color:#939393;">
					<h2 style="font-size: 50px;">{title}</h2>
				</div>
			</div>
			<div style="position:relative;">
				<div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
					<h2 class="mdc-typography--headline6" style="margin: 0; font-weight: 400;">{title}</h2>
					<h3 class="mdc-typography--subtitle2" style="margin: 0; font-weight: 400;">{subtitle}</h3>
				</div>
			</div>
		</div>
		<Content class="mdc-typography--body2">
			{content}
		</Content>
	</PrimaryAction>
</Card>
