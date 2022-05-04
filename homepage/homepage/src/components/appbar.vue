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
      <template
      v-slot:activator="{ on, attrs }">
      <v-tab
      v-bind="attrs"
      v-on="on"
      >دسته بندی ها</v-tab>
      </template>
      <v-menu
        open-on-hover
        top
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-tab
          v-bind="attrs"
          v-on="on"
          >دسته بندی ها
          </v-tab>
        </template>

        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item"
            link
          >
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
            items: [
            'غذایی' ,
            'برودتی',
            'پیچ و مهره',
            'قالب سازی' ,
          ],
        }
    },
})
</script>
<style scoped>
</style>
