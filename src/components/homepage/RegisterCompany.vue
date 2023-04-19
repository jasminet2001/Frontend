<template>
  <v-container class="main-div" fluid>
    <v-row class="mb-3">
      <v-col>
        <h1 style="font-weight: bolder; font-size: 1.5em">هنوز شرکت خود را ثبت نکرده اید؟</h1>
      </v-col>
    </v-row>
    <v-row class="mb-6">
      <v-col>
        <h2 style="font-size: 1.2em; font-weight: normal">با ثبت شرکت خود، به خود شانس بیشتر دیده شدن بدهید!</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <button class="btn btn-mobile" v-if="this.$vuetify.breakpoint.smAndDown">
          ثبت شرکت
        </button>
        <button class="btn" v-else>
          ثبت شرکت
        </button>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@import '../../assets/styles/homepage/registerCompany.css';
</style>
