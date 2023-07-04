<template>
  <v-app>
      <v-sheet v-if="this.$vuetify.breakpoint.mdAndUp">
        <v-row>
          <v-col cols="6">
            <wallet-component :credit="balance"/>
          </v-col>
          <v-col cols="6">
            <current-plan-component />
          </v-col>
        </v-row>
      </v-sheet>
      <div v-else>
        <wallet-component :credit="balance"/>
        <current-plan-component />
      </div>
      <ChargeWalletComponent @update-wallet="updateCredit"/>
      <PurchasePlanComponent />

  </v-app>
</template>

<script>
import CurrentPlanComponent from "@/components/companyPanel/CurrentPlanComponent.vue";
import ChargeWalletComponent from "@/components/companyPanel/ChargeWalletComponent.vue";
import PurchasePlanComponent from "@/components/companyPanel/PurchasePlanComponent.vue";
import WalletComponent from './WalletComponent.vue';

export default {
  name: "PaymentPageComponent",
  components: {PurchasePlanComponent, ChargeWalletComponent, CurrentPlanComponent, WalletComponent},
  data () {
    return {
      planColor: {
        NoPlan: '#ffffff',
        Classic: '#f6fff8',
        Pro: '#eaf4f4',
        Deluxe: '#cce3de',
        Max: '#a4c3b2'
      },
      changedCredit: '',
      balance: 0,
    }
  },
  methods: {
    updateCredit(newCredit) {
      this.balance = newCredit;
      console.log('Page has got it!');
      console.log(this.balance);
    }
  },
  beforeMount(){
    console.log('hook');
    this.balance = this.$cookies.get('user').wallet
  }
}
</script>

<style scoped>

</style>
