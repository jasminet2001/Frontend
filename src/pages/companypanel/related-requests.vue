<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <related-ads></related-ads>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/companyPanel/CompanySidebarNavigation.vue";
import RelatedAds from "@/components/companyPanel/RelatedAds.vue";

export default{
    components: {SidebarNavigation, RelatedAds},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
