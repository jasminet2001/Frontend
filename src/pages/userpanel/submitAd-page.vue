<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <submit-ad :style="{'width': $vuetify.breakpoint.mdAndUp?'95%':'100%'}"></submit-ad >
    </v-sheet>
</template>

<script>
import submitAd from '@/components/userpanel/submitAd.vue';
import SidebarNavigation from '@/components/userpanel/SidebarNavigation.vue';
export default {
	name: "submitAd-page",
	components: {submitAd, SidebarNavigation},
}
</script>

<style scoped>
</style>
