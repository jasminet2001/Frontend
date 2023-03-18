<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <company-dashboard></company-dashboard>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/companyPanel/CompanySidebarNavigation.vue";
import CompanyDashboard from '@/components/companyPanel/CompanyDashboard.vue';

export default{
    components: {SidebarNavigation, CompanyDashboard},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
