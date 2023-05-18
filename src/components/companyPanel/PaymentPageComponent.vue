<template>
  <v-app>
    <SidebarNavigation />
    <v-sheet class="pa-5">
      <v-sheet v-if="this.$vuetify.breakpoint.mdAndUp">
        <v-row>
          <v-col cols="6">
            <wallet-component />
          </v-col>
          <v-col cols="6">
            <current-plan-component />
          </v-col>
        </v-row>
      </v-sheet>
      <div v-else>
        <wallet-component class="mb-3"/>
        <current-plan-component />
      </div>
      <ChargeWalletComponent />
      <PurchasePlanComponent />
    </v-sheet>
  </v-app>
</template>

<script>
import SidebarNavigation from "@/components/companyPanel/CompanySidebarNavigation.vue";
import WalletComponent from "@/components/companyPanel/PurchasePlanComponent.vue";
import CurrentPlanComponent from "@/components/companyPanel/CurrentPlanComponent.vue";
import ChargeWalletComponent from "@/components/userpanel/ChargeWalletComponent.vue";
import PurchasePlanComponent from "@/components/companyPanel/PurchasePlanComponent.vue";
export default {
  name: "PaymentPageComponent",
  components: {PurchasePlanComponent, ChargeWalletComponent, CurrentPlanComponent, WalletComponent, SidebarNavigation},
  data () {
    return {
      planColor: {
        NoPlan: '#ffffff',
        Classic: '#f6fff8',
        Pro: '#eaf4f4',
        Deluxe: '#cce3de',
        Max: '#a4c3b2'
      }
    }
  }
}
</script>

<style scoped>

</style>
