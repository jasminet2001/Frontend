<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <ads-list></ads-list>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/companyPanel/CompanySidebarNavigation.vue";
import AdsList from '@/components/companyPanel/CompanyAdsList.vue';

export default{
    components: {SidebarNavigation, AdsList},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
