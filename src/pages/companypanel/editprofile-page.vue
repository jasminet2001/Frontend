<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <edit-profile></edit-profile>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/companyPanel/CompanySidebarNavigation.vue";
import EditProfile from "@/components/companyPanel/EditCompanyProfile.vue";

export default{
    components: {SidebarNavigation, EditProfile},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
