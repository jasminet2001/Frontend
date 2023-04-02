<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <ads-list style="width: 95%"></ads-list>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/userpanel/SidebarNavigation.vue";
import AdsList from '@/components/userpanel/AdsList.vue';

export default{
    components: {SidebarNavigation, AdsList},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
