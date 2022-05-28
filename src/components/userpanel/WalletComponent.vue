<template>
  <v-sheet color="transparent" class="pa-4">
    <div class="pa-4">
      <v-row class="mb-5">
        <strong style="font-size: 1.5em">کیف پول</strong>
      </v-row>
      <hr class="my-3"/>
      <v-row v-if="this.$vuetify.breakpoint.smAndUp">
        <div class="credit-card rounded-xl my-3 elevation-3" style="width: 374px; height: 247px; margin: 0 auto;">
          <div class="mt-13 justify-start">
            <span style="font-size: 1.5em;" class="mr-10">موجودی</span>
          </div>
          <div class="justify-start" style="margin-top: 68px">
            <span style="font-size: 1.5em;" class="mr-10">{{ credit }}</span>
            &nbsp;
            تومان
          </div>
        </div>
      </v-row>
      <v-row v-else>
        <div class="credit-card-mobile rounded-xl elevation-3 my-3" style="margin: 0 auto; width: 276px !important; height: 180px !important;">
          <div class="mt-8 justify-start">
            <span style="font-size: 1.5em;" class="mr-5">موجودی</span>
          </div>
          <div class="justify-start" style="margin-top: 35px">
            <span style="font-size: 1.5em;" class="mr-5">{{ credit }}</span>
            &nbsp;
            تومان
          </div>
        </div>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "WalletComponent",
  data () {
    return {
      credit: '500000'
    }
  }
}
</script>

<style scoped>
.credit-card{
  background-image: url("../../assets/CardDesktopPayment.png");
}
.credit-card-mobile{
  background-image: url("../../assets/CardMobilePayment.png"); /*277 * 181*/
  background-position: center;
}
</style>
