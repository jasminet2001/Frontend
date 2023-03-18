<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <submit-ad></submit-ad>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/companyPanel/CompanySidebarNavigation.vue";
import submitAd from '@/components/userpanel/submitAd.vue';
export default{
    components: {SidebarNavigation, submitAd},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
