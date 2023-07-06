<template>
  <v-card class="pa-4" elevation="8" outlined height="75%" shaped justify="center" align="center">
    <v-form ref="form" color="transparent" v-model="valid" lazy-validation>
      <v-card-title v-if="!isMobile">
        <img src="https://svgshare.com/i/g44.svg" class="card-pic">
      </v-card-title>
      <v-card-text>
        <v-row class="mt-8 mx-2" justify="center" align="center" no-gutters>
          <v-col cols="12">
            <v-row>
              <p class="mt-3" style="margin: 0 auto;">حساب کاربری ندارید؟</p>
              <a @click="SignUp()" class="mt-3"
              style="color:black; text-decoration:none; font-style: italic; margin: 0 auto">
              ثبت نام کنید</a>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="mt-5 mx-2" justify="center" align="center">
          <v-text-field
              v-model="email"
              :rules="emailRules"
              name="input-10-0"
              label="ایمیل"
              style="direction: ltr !important;"
              required>
          </v-text-field>
        </v-row>
        <v-row class="mt-5 mx-2" justify="center" align="center">
          <v-text-field
              v-model="password"
              :append-icon="show1 ? ImdiEye : ImdiEyeOff"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="رمز عبور"
              hint="رمز عبور حداقل 8 حرف باید باشد"
              counter
              @click:append="show1 = !show1"
              style="direction: ltr !important;"
          ></v-text-field>
        </v-row>
        <v-row class="mt-16 mx-2" align="center" justify="center" no-gutters>
          <v-col cols="6">
						<router-link to="/reset-link" class="link mr-1" style="font-size: 0.9em">فراموشی رمز عبور؟</router-link>
          </v-col>

          <v-col cols="6">
            <v-btn class="button white--text"
            color="#000824" width="100%"
            @click="fetchData()">
              ورود
            </v-btn>

          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script>
import { mdiEye, mdiEyeOff } from '@mdi/js';
export default {
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      ImdiEye: mdiEye,
      ImdiEyeOff: mdiEyeOff,
      show1: false,
      password: '',
      email: '',
      rules: {
        required: value => !!value || 'رمز عبور لازم است!',
        min: v => v.length >= 8 || 'حداقل ۸ کارکتر بنویسید.',
      },
      emailRules: [
        v => !!v || 'ایمیل را وارد کنید',
        v => /.+@.+\..+/.test(v) || 'ایمیل صحیح وارد نمایید',
      ],
    }
  },
  methods:{
    async fetchData(){
      let axios = require('axios');
      let FormData = require('form-data');
      let data = new FormData();
      data.append('email', this.email);
      data.append('password', this.password);

      var config = {
        method: 'post',
        url: this.$store.state.host + 'authentication/login',
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      var errorToaster = (msg) => {
        this.$toast.open({
          message: msg,
          type: 'error',
        });
      };
      let that = this;
      await axios(config)
          .then(function (response) {
            var result=response.data;
            that.$cookies.set('token', result.token);
            that.$cookies.set('user', result.user);
            if (result.user.role==='user')
              that.$router.push('/user/dashboard');
            if (result.user.role==='company')
              that.$router.push('/company/dashboard')
          })
          .catch(function (error) {
            console.log(error);
            if (error.status!=429)errorToaster('!ایمیل یا رمز عبور اشتباه است');
          });
    },
    SignUp(){
      this.$router.push('/signup');
    },
  }
}
</script>

<style scoped>
@import '../../assets/styles/login-signup/login.css';
</style>
