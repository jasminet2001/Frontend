<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <recieved-requests></recieved-requests>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/companyPanel/CompanySidebarNavigation.vue";
import RecievedRequests from '@/components/companyPanel/RecievedRequests.vue';

export default{
    components: {SidebarNavigation, RecievedRequests},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
