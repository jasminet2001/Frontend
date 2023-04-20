<template>
  <v-hover v-slot="{ hover }">
    <v-card class="rounded-lg-pa-2" :elevation="hover ? 4 : 1" :outlined="hover" :class=" {'blue-text': hover}">
      <v-card-title
          class="justify-center"
          style="color: black">
        <strong>{{ item.title }}</strong>
        <v-spacer />
        <span style="color: #9FA2B4 !important; font-size: 0.8em !important;">
          {{ item.Date }}
        </span>
      </v-card-title>
      <v-card-subtitle style="color: #9FA2B4 !important;">
        توسط:
        {{ item.sender.name }}
      </v-card-subtitle>
      <v-card-text align="start">
        {{ item.description }}
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="#F0F1F7"
          class="rounded-lg"
          elevation="0"
          style="color: #3751FF">
          مشاهده آگهی
          &nbsp;
          <v-icon color="#3751FF" small>{{ ImdiOpen }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import { mdiOpenInNew } from '@mdi/js'
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      ImdiOpen: mdiOpenInNew
    }
  }
}
</script>

<style scoped>
.blue-text{
  color: #3751FF !important;
}
</style>
