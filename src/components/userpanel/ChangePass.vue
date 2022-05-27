<template>
    <!-- desktop -->
    <v-app v-if="this.$vuetify.breakpoint.mdAndUp">
      <SidebarNavigation/>
      <v-sheet color="transparent" elevation="0" class="pa-8">
        <h2 class="mb-5 mr-5">تغییر رمز عبور</h2>
        <v-card
        class="card-desktop"
        style="margin-bottom: 4em;"
        width="70vw"
        height="80%"
        elevation="4"
        raised
        rounded
        outlined>
          <v-card-text>
            <v-form class="px-3" v-model="submitForm">
              <h3>رمز عبور فعلی</h3>
              <v-divider />
              <v-row class="pa-4">
                <v-col cols="6"
                class="px-8 col">
                  <v-text-field
                    type="password"
                    label="رمز عبور فعلی را وارد نمایید"
                    v-model="password"
                    outlined>
                  </v-text-field>
                </v-col>
              </v-row>
              <h3>رمز عبور جدید</h3>
              <v-divider />
              <v-row class="pa-4">
                <v-col cols="6"
                class="px-8 col">
                  <v-text-field
                      type="password"
                      style="height: 100%;"
                      clearable
                      outlined
                      v-model="newPassword"
                      label="رمز عبور جدید را وارد کنید">
                  </v-text-field>
                </v-col>
                <v-col cols="6"
                class="px-8 col">
                  <v-text-field
                      type="password"
                      style="height: 100%;"
                      clearable
                      outlined
                      v-model="newPasswordConfirm"
                      label="رمز عبور جدید را تایید کنید">
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-btn
                    class="btn my-0"
                    elevation="4"
                    large
                    outlined
                    raised
                    text
                    style="background-color: #3751FF;
                    color:white;"
                    @click="change"
                >
                  ذخیره تغییرات
                </v-btn>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-app>

    <!-- responsive -->
    <v-app v-else>
      <SidebarNavigation/>
      <v-sheet class="pa-5" color="transparent" elevation="0">
        <h2 class="mb-5">تغییر رمز عبور</h2>
        <v-card
        class="card-res"
        width="85vw"
        height="90%"
        elevation="4"
        raised
        rounded
        outlined
        >
          <v-card-text>
            <v-form class="px-3">
              <v-row class="d-flex flex-column">
                <v-col cols="12"
                class="px-8 col">
                  <h3>رمز عبور فعلی</h3>
                  <v-divider />
                  <v-row>
                    <v-col cols="12"
                           class="px-8 col">
                      <v-text-field
                          type="password"
                          label="رمز عبور فعلی را وارد نمایید"
                          v-model="password"
                          outlined>
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <h3>رمز عبور جدید</h3>
                  <v-divider />
                  <v-row>
                    <v-col cols="12"
                           class="px-8 py-0 my-0 col">
                      <v-text-field
                          type="password"
                          clearable
                          outlined
                          v-model="newPassword"
                          label="رمز عبور جدید را وارد کنید">
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12"
                           class="px-8 py-0 my-0 col">
                      <v-text-field
                          type="password"
                          clearable
                          outlined
                          v-model="newPasswordConfirm"
                          class="my-0"
                          label="رمز عبور جدید را تایید کنید">
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-btn
                        class="btn my-0"
                        elevation="4"
                        large
                        outlined
                        raised
                        text
                        style="background-color: #3751FF;
                    color:white;"
                        @click="change"
                    >
                      ذخیره تغییرات
                    </v-btn>
                  </v-row>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-app>
</template>

<script>
import SidebarNavigation from "./SidebarNavigation.vue";
export default {
  components: { SidebarNavigation },
  data: () => ({
    password: "",
    newPassword: "",
    newPasswordConfirm: ""
  }),
  methods: {
    errorToaster(msg, type='error'){
      this.$toast.open({
        message: msg,
        type: type,
      })
    },
    async change(){
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('password', this.password);
      data.append('new_password', this.newPassword);
      data.append('new_password_confirmation', this.newPasswordConfirm);

      var config = {
        method: 'post',
        url: 'http://localhost:8000/api/user/changepass',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer '+this.$cookies.get('token'),
        },
        data : data
      };
      let that = this;
      await axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            that.errorToaster('رمز عبور با موفقیت تغییر یافت','success');
          })
          .catch(function (error) {
            console.log(error);
            if (error.response.status == 422) {
              for (let err in error.response.data.errors) {
                that.errorToaster(error.response.data.errors[err][0]);
              }
            }
            if (error.response.status == 401) {
              that.errorToaster('رمز عبور اشتباه است');
            }
          });
    }
  },
}
</script>

<style scoped>
    /* .title{
        margin: 2em;
        margin-right: 17em;
    } */
    .col *{
        margin: .5em;
    }
    .btn{
        margin-top: 7em;
    }
    .btn-mobile{
        margin-top: 1em;
    }
    /* .title-res{
        text-align: center;
        margin: 2em;
    } */
    .card-res{
        margin: 1em;
        padding: 1em;
        border: 2px dashed #000080;
    }
    .card-desktop{
        border: 2px dashed #000080;
    }
</style>
