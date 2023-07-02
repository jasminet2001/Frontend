<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <change-pass></change-pass>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/companyPanel/CompanySidebarNavigation.vue";
import ChangePass from '@/components/companyPanel/ChangeCompanyPass.vue';

export default{
    components: {SidebarNavigation, ChangePass},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
