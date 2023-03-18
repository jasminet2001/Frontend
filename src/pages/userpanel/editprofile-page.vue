<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <edit-profile></edit-profile>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/userpanel/SidebarNavigation.vue";
import EditProfile from "@/components/userpanel/EditProfile.vue";

export default{
    components: {SidebarNavigation, EditProfile},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
