<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <bookmarks-component></bookmarks-component>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/companyPanel/CompanySidebarNavigation.vue";
import BookmarksComponent from "@/components/companyPanel/StarredAdsPageComponent.vue";

export default{
    components: {SidebarNavigation, BookmarksComponent},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
