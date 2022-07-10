<template>
  <v-sheet color="transparent" class="pa-4">
    <div class="pa-4">
      <v-row class="mb-5">
        <strong style="font-size: 1.5em">پلن فعال</strong>
      </v-row>
      <hr class="my-3"/>
      <v-row>
        <v-spacer />
        <v-col cols="10" md="10" lg="10" xl="8" sm="8">
          <v-card v-if="this.$vuetify.breakpoint.xsOnly" width="100%" elevation="1" 
          class="rounded-xl py-2 px-4 plan-card" 
          outlined style="min-height: 181px; max-width: 277px; margin: 0 auto;">
            <v-card-text>
              <v-row class="my-2" style="font-size: 1.2em; font-weight: bolder">
                <span>پلن فعال:</span>
                <v-spacer />
                <span>{{ currentPlan.planName }}</span>
              </v-row>
              <v-divider />
              <v-row class="my-2" style="font-size: 1.0em">
                <span>روزهای باقی مانده:</span>
                <v-spacer />
                <span>{{ currentPlan.DaysRemaining }}</span>
              </v-row>
              <v-divider />
              <v-row class="my-2" style="font-size: 1.0em">
                <span>آگهی های باقی مانده:</span>
                <v-spacer />
                <span>{{ currentPlan.AdsRemaining }}</span>
              </v-row>
              <v-divider />
              <v-row class="my-2" style="font-size: 1.0em">
                <span>آگهی های استفاده شده:</span>
                <v-spacer />
                <span>{{ currentPlan.usedAds }}</span>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card v-else width="100%" elevation="1" class="rounded-xl py-2 px-4 plan-card" 
          outlined style="min-height: 218px; max-width: 377px; margin: 0 auto">
            <v-card-text class="white--text">
              <v-row class="my-2" style="font-size: 1.2em; font-weight: bolder">
                <span>پلن فعال:</span>
                <v-spacer />
                <span>{{ currentPlan.planName }}</span>
              </v-row>
              <v-divider />
              <v-row class="my-2" style="font-size: 1.0em">
                <span>روزهای باقی مانده:</span>
                <v-spacer />
                <span>{{ currentPlan.DaysRemaining }}</span>
              </v-row>
              <v-divider />
              <v-row class="my-2" style="font-size: 1.0em">
                <span>آگهی های باقی مانده:</span>
                <v-spacer />
                <span>{{ currentPlan.AdsRemaining }}</span>
              </v-row>
              <v-divider />
              <v-row class="my-2" style="font-size: 1.0em">
                <span>آگهی های استفاده شده:</span>
                <v-spacer />
                <span>{{ currentPlan.usedAds }}</span>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-spacer />
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "CurrentPlanComponent",
  data () {
    return {
      planColor: {
        NoPlan: '#ffffff',
        Classic: '#caf0f8',
        Pro: '#ade8f4',
        Deluxe: '#90e0ef',
        Max: '#48cae4'
      },
      currentPlan: {
        planName: 'Pro',
        DaysRemaining: 100,
        AdsRemaining: 30,
        usedAds: 10
      }
    }
  }
}
</script>

<style scoped>
.plan-card{
  background-image: url("../../assets/plan-background.svg");
}
</style>
