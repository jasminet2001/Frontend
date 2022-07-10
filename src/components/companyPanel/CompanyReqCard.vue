<template>
  <v-card
      elevation="4"
      shaped
      class="pa-2 ma-2 req-card white--text"
      >
    <v-card-title class="mb-1 mt-0">
      {{ ad.Title }}
    </v-card-title>
    <v-card-text class="my-1">
      <v-row class="mx-4 my-1 white--text">
        <h3>{{ ad.CompanyName }}</h3>
      </v-row>
      <v-row class="my-4 mx-2 white--text">
        <v-icon class="white--text">mdi-check-bold</v-icon>
        وضعیت:
        {{ ad.Status }}
      </v-row>
    </v-card-text>
    <v-card-actions class="justify-center align-center mt-1 mb-0">
      <v-btn width="40%" text color="white">
        <v-icon color="white" class="ml-2" style="bottom: 1px">{{ ImdiInfo }}</v-icon>
        <span>اطلاعات بیشتر</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mdiInformationOutline } from '@mdi/js';
export default {
  props: {
    ad: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      ImdiInfo: mdiInformationOutline
    }
  }
}
</script>

<style scoped>
.req-card{
background: rgb(161,156,251);
background: linear-gradient(90deg, rgba(161,156,251,1) 0%, rgba(99,99,245,1) 68%);
}

</style>
