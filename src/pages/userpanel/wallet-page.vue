<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <payment-page-component style="width: 95%"></payment-page-component>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/userpanel/SidebarNavigation.vue";
import paymentPageComponent from "@/components/userpanel/PaymentPageComponent";

export default{
    components: {SidebarNavigation, paymentPageComponent},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
