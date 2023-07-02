<template>
	<v-sheet>
		<sidebar-navigation></sidebar-navigation>
		<ads-list :style="{'width': $vuetify.breakpoint.mdAndUp?'95%':'100%'}"></ads-list>
	</v-sheet>
</template>

<script>
import adsList from "@/components/userpanel/AdsList";
import sidebarNavigation from "@/components/userpanel/SidebarNavigation";

export default {
	components:{adsList, sidebarNavigation},
	name: "adList-page"
}
</script>

<style scoped>

</style>