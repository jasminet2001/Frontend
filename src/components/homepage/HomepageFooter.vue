<template>
  <v-footer
      color="#000930"
      class="pa-10"
      style="border-top: 10px solid #394DB8; color: white !important;"
  >
    <v-row
        :dense="$vuetify.breakpoint.smAndDown"
        justify="center"
        no-gutters
        style="background-color: transparent;"
    >
      <v-spacer />

      <v-col cols="12" md="3" lg="3" xl="3" class="my-2">
        <h3 class="mb-4 text-class" align="center">
          <a style="text-decoration: none; color: white">
            {{ rightColumn.Title }}
          </a>
        </h3>
        <v-item-group v-if="this.$vuetify.breakpoint.mdAndUp">
          <div v-for="(item, index) in rightColumn.List" :key="index" class="my-2 text-class" align="center">
            <v-item>
              {{ item }}
            </v-item>
          </div>
        </v-item-group>
      </v-col>

      <hr v-if="this.$vuetify.breakpoint.smAndDown" style="color: white !important; border-color: white !important; width: 100%;"/>

      <v-spacer />

      <v-col cols="5" md="3" lg="3" xl="3" v-if="this.$vuetify.breakpoint.mdAndUp" class="my-2">
        <h3 class="mb-4 text-class" align="center">
          {{ leftColumn.Title }}
        </h3>
        <v-item-group>
          <div v-for="(item, index) in leftColumn.List" :key="index" class="my-2 text-class" align="center">
            <v-item>
              {{ item }}
            </v-item>
          </div>
        </v-item-group>
      </v-col>

      <v-spacer />

      <v-col v-if="this.$vuetify.breakpoint.smAndDown" cols="12" md="8" lg="8" xl="6" class="mt-6">
        <v-row justify="center" style="background-color: transparent; font-size: 1em">
          برای دریافت جدید ترین خبر ها در خبرنامه عضو شوید
        </v-row>
        <v-row justify="center" style="background-color: transparent">
          <v-col cols="8">
            <v-text-field
                class="rounded-lg"
                color="white"
                outlined
                placeholder="ایمیل خود را وارد کنید"
                v-model="email"
                filled
                dark
                label="ایمیل"
                name="email-input"
                width="100%">
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <button class="btn btn-mobile">
              عضویت
            </button>
          </v-col>
        </v-row>
      </v-col>

      <hr v-if="this.$vuetify.breakpoint.smAndDown" style="color: white !important; border-color: white !important; width: 100%;"/>

      <v-spacer />

      <v-col cols="12" md="3" lg="3" xl="3" class="my-2" align="center">
        <h3 class="mb-4 text-class" v-if="this.$vuetify.breakpoint.mdAndUp" align="center">
          {{ socials.Title }}
        </h3>
        <v-item-group v-if="this.$vuetify.breakpoint.mdAndUp">
          <v-row v-for="(item, index) in socials.List" :key="index" class="my-1 text-class">
            <v-col cols="2">
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-col>
            <v-col cols="10">
              <span style="color: white">{{ item.link }}</span>
            </v-col>
          </v-row>
        </v-item-group>
        <v-row v-else align="center">
          <v-spacer />
          <v-col cols="2" v-for="(item, index) in socials.List" :key="index">
            <a>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </a>
            <v-divider vertical style="color: white"/>
          </v-col>
          <v-spacer />
        </v-row>
      </v-col>

      <v-spacer />

      <v-col v-if="this.$vuetify.breakpoint.mdAndUp" cols="12" md="8" lg="8" xl="6" class="mt-6">
        <v-row justify="right" style="background-color: transparent; font-size: 1em; margin-right: .5em;">
          برای دریافت جدید ترین خبر ها در خبرنامه عضو شوید
        </v-row>
        <v-row justify="center" style="background-color: transparent">
          <v-col cols="8">
            <v-text-field
                class="rounded-lg"
                color="white"
                outlined
                placeholder="ایمیل خود را وارد کنید"
                v-model="email"
                filled
                dark
                label="ایمیل"
                name="email-input"
                width="100%">
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <button class="btn">
              عضویت
            </button>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mdiInstagram, mdiLinkedin, mdiTwitter, mdiWhatsapp } from '@mdi/js';
export default {
  data () {
    return {
      leftColumn: {
        Title: 'مقالات',
        List: [
          'بهترین شرکت ها برای صادرات لبنیات',
          'بهترین شرکت ها برای صادرات لبنیات',
          'بهترین شرکت ها برای صادرات لبنیات',
          'بهترین شرکت ها برای صادرات لبنیات',
        ]
      },
      rightColumn: {
        Title: 'مقالات',
        List: [
          'بهترین شرکت ها برای صادرات لبنیات',
          'بهترین شرکت ها برای صادرات لبنیات',
          'بهترین شرکت ها برای صادرات لبنیات',
          'بهترین شرکت ها برای صادرات لبنیات',
        ]
      },
      socials: {
        Title: 'ما را در فضای مجازی دنبال کنید',
        List: [
          {icon: mdiInstagram, link: 'instagram.com/sanatyab.ir'},
          {icon: mdiLinkedin, link: 'linkedin.com/sanatyab.ir'},
          {icon: mdiTwitter, link: 't.me/sanatyab.ir'},
          {icon: mdiWhatsapp, link: 'wa.me/sanatyab.ir' }
        ]
      },
      email: null
    }
  }
}
</script>

<style scoped>
.text-class{
  color: white !important;
}
.btn {
  margin: 4%;
  margin-top: 4%;
  --color: white;
  padding: 0.8em 1.7em;
  width: 100%;
  background-color: #ffeb3b;
  border-radius: 3em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: .5s;
  font-weight: 400;
  font-size: 17px;
  font-family: inherit;
  text-transform: uppercase;
  color: navy;
  z-index: 1;
}

.btn::before, .btn::after {
 content: '';
 display: block;
 width: 50px;
 height: 50px;
 transform: translate(-50%, -50%);
 position: absolute;
 border-radius: 50%;
 z-index: -1;
 background-color: var(--color);
 transition: 1s ease;
}

.btn::before {
 top: -1em;
 left: -1em;
}

.btn::after {
 left: calc(100% + 1em);
 top: calc(100% + 1em);
}

.btn:hover::before, .btn:hover::after {
 height: 410px;
 width: 410px;
}

.btn:hover {
 color: rgb(10, 25, 30);
}

.btn:active {
 filter: brightness(.8);
}
.btn-mobile{
  padding: .5em;
}
</style>
