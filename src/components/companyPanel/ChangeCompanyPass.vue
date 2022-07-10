<template>
    <!-- desktop -->
    <v-app v-if="this.$vuetify.breakpoint.mdAndUp">
      <CompanySidebarNavigationVue />
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
        outlined
        >
          <v-card-text>
            <v-form class="px-3">
              <v-row class="pa-3">
                <v-col cols="6"
                class="px-8 col"
                >
                <p>رمز عبور فعلی</p>
                  <v-text-field
                      label="رمز عبور فعلی"
                      v-model="password"
                      outlined
                      :append-icon="show1 ? ImdiEye : ImdiEyeOff"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"
                      style="direction: ltr !important;">
                  </v-text-field>

                  <p>رمز عبور جدید</p>
                  <v-text-field
                      label="رمز عبور جدید"
                      v-model="newPassword"
                      outlined
                      :append-icon="show2 ? ImdiEye : ImdiEyeOff"
                      :rules="[rules.required, rules.min]"
                      :type="show2 ? 'text' : 'password'"
                      @click:append="show2 = !show2"
                      style="direction: ltr !important;">
                  </v-text-field>

                  <p>تکرار رمز عبور جدید</p>
                  <v-text-field
                      label="تکرار رمز عبور جدید"
                      v-model="newPasswordConfirm"
                      outlined
                      :append-icon="show3 ? ImdiEye : ImdiEyeOff"
                      :rules="[rules.required, rules.min]"
                      :type="show3 ? 'text' : 'password'"
                      @click:append="show3 = !show3"
                      style="direction: ltr !important;">
                  </v-text-field>

                  <!-- save button -->
                  <v-btn
                  class="btn-mobile"
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

                    <!-- clear button -->
                    <v-btn
                    class="btn-mobile"
                    color="#3751FF"
                    elevation="4"
                    outlined
                    large
                    raised
                    @click="clear"
                    >لغو
                    </v-btn>
                </v-col>
                <v-col cols="6">
                    <v-img src="@/assets/password.png" class="img"></v-img>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-app>

    <!-- responsive -->
    <v-app v-else>
      <!-- what's the n? -->
      <CompanySidebarNavigationVue n/>
      <v-sheet class="pa-5" color="transparent" elevation="0">
        <h2 class="mb-5">ویرایش رمز عبور</h2>
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
                class="px-8 col"
                >
                  <v-text-field
                      label="رمز عبور فعلی"
                      v-model="password"
                      outlined
                      :append-icon="show4 ? ImdiEye : ImdiEyeOff"
                      :rules="[rules.required, rules.min]"
                      :type="show4 ? 'text' : 'password'"
                      @click:append="show4 = !show4"
                      style="direction: ltr !important;">
                  </v-text-field>

                  <v-text-field
                      label="رمز عبور جدید"
                      v-model="newPassword"
                      outlined
                      :append-icon="show5 ? ImdiEye : ImdiEyeOff"
                      :rules="[rules.required, rules.min]"
                      :type="show5 ? 'text' : 'password'"
                      @click:append="show5 = !show5"
                      style="direction: ltr !important;">
                  </v-text-field>

                  <v-text-field
                      label="تکرار رمز عبور جدید"
                      v-model="newPasswordConfirm"
                      outlined
                      :append-icon="show6 ? ImdiEye : ImdiEyeOff"
                      :rules="[rules.required, rules.min]"
                      :type="show6 ? 'text' : 'password'"
                      @click:append="show6 = !show6"
                      style="direction: ltr !important;">
                  </v-text-field>

                  <!-- save button -->
                  <v-btn
                  class="btn-mobile"
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

                    <!-- clear button -->
                    <v-btn
                    class="btn-mobile"
                    color="#3751FF"
                    elevation="4"
                    outlined
                    large
                    raised
                    @click="clear"
                    >لغو
                    </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-app>
</template>

<script>
import { mdiEye, mdiEyeOff } from '@mdi/js';
import CompanySidebarNavigationVue from './CompanySidebarNavigation.vue';
export default {
  components: { CompanySidebarNavigationVue },
  data: () => ({
    password: "",
    newPassword: "",
    newPasswordConfirm: "",
    ImdiEye: mdiEye,
    ImdiEyeOff: mdiEyeOff,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    rules: {
      required: value => !!value || 'رمز عبور لازم است!',
      min: v => v.length >= 8 || 'حداقل ۸ کارکتر بنویسید.',
    },
    emailRules: [
      v => !!v || 'ایمیل را وارد کنید',
      v => /.+@.+\..+/.test(v) || 'ایمیل صحیح وارد نمایید.',
    ],
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
          .then(function () {
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
    .img{
      margin-top: 5em;
    }
</style>
