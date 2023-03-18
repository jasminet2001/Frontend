<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <user-upgrade></user-upgrade>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/userpanel/SidebarNavigation.vue";
import userUpgrade from '@/components/userpanel/userUpgrade.vue';

export default{
    components: {SidebarNavigation, userUpgrade},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
