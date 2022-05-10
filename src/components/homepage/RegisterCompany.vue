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
        <v-btn
          rounded
          color="yellow"
          width="40%"
          elevation="1"
          style="color: black">
          ثبت شرکت
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.main-div {
  background-image: url("../../assets/register-company.webp") !important;
  background-size: cover;
  height: 90vh;
  padding: 10%;
  color: white;
  text-align: center;
}
</style>
