<template>
  <v-app-bar
    clipped-right
    app
    elevate-on-scroll
    color="#000930"
    dark
    class=""
    height="70%">
    <v-tabs>
      <v-tab>
        <v-btn icon>
          <v-avatar
            color="primary"
            size="36"
          ></v-avatar>
        </v-btn>
      </v-tab>
      <v-tab>صفحه اصلی</v-tab>
      <v-tab>دسته بندی</v-tab>
      <v-tab>ثبت شرکت</v-tab>
      <v-tab>تماس با ما</v-tab>
      <v-spacer />
      <v-tab>
        <v-btn-toggle background-color="#000930" shaped>
          <v-btn color="white" elevation="0" tile flat outlined class="pa-5">ورود</v-btn>
          <v-btn color="white" elevation="0" tile flat outlined class="">ثبت نام</v-btn>
        </v-btn-toggle>
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default({
    name: 'app-bar',
    data(){
        return{
            tab:null,
        }
    },
})
</script>
<style scoped>
</style>
