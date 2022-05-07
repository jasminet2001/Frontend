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
      <v-col cols="3">
        <h3 class="mb-4 text-class">
          {{ rightColumn.Title }}
        </h3>
        <v-item-group>
          <div v-for="(item, index) in rightColumn.List" :key="index" class="my-2 text-class">
            <v-item>
              {{ item }}
            </v-item>
          </div>
        </v-item-group>
      </v-col>
      <v-spacer />
      <v-col cols="3">
        <h3 class="mb-4 text-class">
          {{ leftColumn.Title }}
        </h3>
        <v-item-group>
          <div v-for="(item, index) in leftColumn.List" :key="index" class="my-2 text-class">
            <v-item>
              {{ item }}
            </v-item>
          </div>
        </v-item-group>
      </v-col>
      <v-spacer />
      <v-col cols="3">
        <h3 class="mb-4 text-class">
          {{ socials.Title }}
        </h3>
        <v-item-group>
          <v-row v-for="(item, index) in socials.List" :key="index" class="my-1 text-class">
            <v-col cols="2">
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-col>
            <v-col cols="10">
              <span style="color: white">{{ item.link }}</span>
            </v-col>
          </v-row>
        </v-item-group>
      </v-col>
      <v-spacer />
      <v-col cols="8" class="mt-6">
        <v-row justify="center" style="background-color: transparent; font-size: 1.2em">
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
            <v-btn
                rounded
                color="yellow"
                width="100%"
                height="50%"
                style="top: 8px !important;">
              <span style="color: black !important;">عضویت</span>
            </v-btn>
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
      }
    }
  }
}
</script>

<style scoped>
.text-class{
  color: white !important;
}

</style>
