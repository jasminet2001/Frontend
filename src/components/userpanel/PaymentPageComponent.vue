<template>
  <v-app>
    <SidebarNavigation />
    <v-sheet v-if="this.$vuetify.breakpoint.mdAndUp">
      <v-row>
        <v-col cols="6">
          <wallet-component :key="credit"/>
        </v-col>
        <v-col cols="6">
          <current-plan-component />
        </v-col>
      </v-row>
    </v-sheet>
    <div v-else>
      <wallet-component class="mb-3" :key="credit"/>
      <current-plan-component />
    </div>
    <ChargeWalletComponent @addCash="addToWallet"/>
    <PurchasePlanComponent />
  </v-app>
</template>

<script>
import SidebarNavigation from "@/components/userpanel/SidebarNavigation";
import WalletComponent from "@/components/userpanel/WalletComponent";
import CurrentPlanComponent from "@/components/userpanel/CurrentPlanComponent";
import ChargeWalletComponent from "@/components/userpanel/ChargeWalletComponent";
import PurchasePlanComponent from "@/components/userpanel/PurchasePlanComponent";
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
      },
      credit: 0
    }
  },
  watch: {
    credit (){
      this.$forceUpdate()
      console.log('fuckkkkkkk offffff')
    }
  },
  methods: {
    async updater() {
      let axios = require('axios');
      let config = {
        method: 'get',
        url: this.$store.state.host + 'authentication/this',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer '+this.$cookies.get('token')
        },
      };
      let that=this;
      await axios(config)
          .then(function (response) {
            that.$cookies.set('user', response.data)
            that.credit = response.data.wallet
          })
          .catch(() => {
            // that.$cookies.remove('user');
            // that.$cookies.remove('token');
          });
    },
    async addToWallet(val){
      let axios = require('axios');
      let FormData = require('form-data');
      let data = new FormData();
      data.append('cash', val);

      var config = {
        method: 'post',
        url: this.$store.state.host + 'user/Addcash',
        headers: {
          'Accept': 'application/json',
          'Authorization' : 'Bearer ' + this.$cookies.get('token')
        },
        data : data
      };
      var errorToaster = (msg) => {
        this.$toast.open({
          message: msg,
          type: 'error',
          position: 'top',
        });
      };
      var successToaster = (msg) => {
        this.$toast.open({
          message: msg,
          type: 'success',
          position: 'top',
        });
      }
      let that = this;
      await axios(config)
          .then(function () {
            successToaster('.عملیات موفقیت آمیز بود! لطفا صفحه را مجددا بارگذاری نمایید')
            that.updater()
            that.credit = that.$cookies.get('user').wallet
          })
          .catch(function (error) {
            console.log(error);
            if (error.status!=429){
              errorToaster('!مشکلی پیش آمده است. لطفا دوباره امتحان کنید');
            }
          });
    },
    async withdrawFromWallet(val){
      var successToaster = (msg) => {
        this.$toast.open({
          message: msg,
          type: 'success',
          position: 'top',
        });
      }
      var errorToaster = (msg) => {
        this.$toast.open({
          message: msg,
          type: 'error',
        });
      };
      if (val > this.credit){
        errorToaster('!موجودی شما کافی نمی‌باشد')
        return
      }
      let axios = require('axios');
      let FormData = require('form-data');
      let data = new FormData();
      data.append('cash', val);

      var config = {
        method: 'post',
        url: this.$store.state.host + 'user/Withdraw',
        headers: {
          'Accept': 'application/json',
          'Authorization' : 'Bearer ' + this.$cookies.get('token')
        },
        data : data
      };
      let that = this;
      await axios(config)
          .then(function () {
            successToaster('عملیات با موفقیت انجام شد!')
          })
          .catch(function (error) {
            console.log(error);
            if (error.status!=429)
              errorToaster('مشکلی پیش آمده. دوباره امتحان کنید.');
            else{
              this.notEnoughCredit = true;
              setTimeout(() => that.notEnoughCredit = false, 4000);
            }
          });
    },
  },
  beforeMount() {
    this.credit = this.$cookies.get('user').wallet
    console.log('this is user', this.$cookies.get('user'))
  }
}
</script>

<style scoped>

</style>
