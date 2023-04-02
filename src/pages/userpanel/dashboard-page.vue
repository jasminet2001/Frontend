<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <user-dashboard :style="{'width': $vuetify.breakpoint.mdAndUp?'95%':'100%'}"></user-dashboard>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/userpanel/SidebarNavigation.vue";
import UserDashboard from '@/components/userpanel/UserDashboard.vue';

export default{
    components: {SidebarNavigation, UserDashboard},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
