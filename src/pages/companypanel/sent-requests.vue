<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <sent-requests></sent-requests>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/companyPanel/CompanySidebarNavigation.vue";
import SentRequests from '@/components/companyPanel/SentRequests.vue';
export default{
    components: {SidebarNavigation, SentRequests},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
