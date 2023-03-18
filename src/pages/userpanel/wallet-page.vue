<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <wallet-component></wallet-component>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/userpanel/SidebarNavigation.vue";
import WalletComponent from '@/components/userpanel/WalletComponent.vue';

export default{
    components: {SidebarNavigation, WalletComponent},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
