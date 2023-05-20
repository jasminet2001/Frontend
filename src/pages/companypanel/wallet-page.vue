<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <company-pay></company-pay>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/companyPanel/CompanySidebarNavigation.vue";
import CompanyPay from '@/components/companyPanel/PaymentPageComponent.vue'

export default{
    components: {SidebarNavigation, CompanyPay},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
