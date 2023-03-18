<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <wallet-component></wallet-component>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/companyPanel/CompanySidebarNavigation.vue";
import WalletComponent from '@/components/companyPanel/WalletComponent.vue';

export default{
    components: {SidebarNavigation, WalletComponent},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
