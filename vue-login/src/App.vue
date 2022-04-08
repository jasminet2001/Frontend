<template>
  <v-app style="background-color: #353B51;">
    <!-- why doesnt justify work? -->
    <v-row class="ma-2" v-if="this.$vuetify.breakpoint.mdAndUp">
      <v-col cols="6">        
        <v-row align="center" justify="center">
          <h1 style="color: white;" class="mx-4 mt-16">ورود</h1>
        </v-row>

        <v-row align="center" justify="center">
          <v-img src="https://svgshare.com/i/g2T.svg"
          class="img">
        </v-img>
        </v-row>
      </v-col>

      <v-col cols="6" style="margin-top:4em">
        <v-form ref="form" class="form" v-model="valid" lazy-validation>
          <v-row class="mt-4"
          align="center" justify="center">
            <v-img src="https://svgshare.com/i/g44.svg"
            height="240">
            </v-img>
          </v-row>

          <!-- chetor bebaram rast? -->
          <v-row class="mt-8" justify="center" align="right">
              <p class="mr-4">
                <a href="#" style="color:black; text-decoration:none;
                font-style: italic;">اینجا ثبت نام کنید</a>
              </p>
              <p>حساب کاربری ندارید؟</p>
          </v-row>

          <v-row class="mt-4 ml-16 mr-16">
            <v-text-field class="field"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required>
            </v-text-field>
          </v-row>

          <v-row class="mt-4 ml-16 mr-16">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-row>

          <v-row class="mt-12" align="center" justify="center">
            <a href="#" class="link">فراموشی رمز عبور؟</a>
            <v-btn class="btn white--text"
            color="#000824">
                ورود
            </v-btn>
          </v-row>
        </v-form>
      </v-col>
    </v-row>

    <v-sheet v-else class="pa-2" color="transparent">
      <v-row class="ma-10">
        <v-spacer />
        <v-col cols="8" class="text-center">
          <!-- <v-img src="https://cdn-icons-png.flaticon.com/512/3408/3408455.png"
          height="50" width="50"
          >
          </v-img> -->
          <v-spacer/>
          <span class="font-weight-bold white--text" style="font-size: 1.5em">
            ورود
          </span>
        </v-col>
        <v-spacer />
      </v-row>

      <v-row>
        <v-spacer />
        <v-col cols="10">
          <v-form ref="form" class="form" v-model="valid" lazy-validation style="background-color: white; width: 75vw;">
            <v-row class="mt-6" justify="center">
              <v-col cols="6" class="text-center">
                <p>حساب کاربری ندارید؟</p>
              </v-col>
              <v-col>
                <a href="#" style="color:black; text-decoration:none;
                font-style: italic;" class="ml-2">اینجا ثبت نام کنید</a>
              </v-col>
            </v-row>

            <v-row class="mt-10">
              <v-text-field class="field"
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required>
              </v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            </v-row>

            <v-row class="mt-8" align="center" justify="center">
              <v-btn class="btn white--text"
              color="#000824">
                 ورود
              </v-btn>
              <a href="#" class="link">فراموشی رمز عبور؟</a>
            </v-row>

          </v-form>
        </v-col>
        <v-spacer />

      </v-row>
    </v-sheet>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
      }
    },
  }
</script>
<style scoped>
  v-app{
    background-color: #000824c8;
  }
  .ma-2{
    height: 100%;
    width: 100%;    
  }
  .link{
    color: #999696;
    margin: 1em;
    text-decoration: none;
  }
  .form{
    border-radius: 2em;
    height: 40vw;
    padding: 2em;
    width: 27vw;
    margin-left: 16em;
    background-color: white;
  }
  .btn{
    margin: 1em;
    width: 8em;
  }
  .img{
    margin-left: 6em;
    margin-top: 6em;
  }
</style>
