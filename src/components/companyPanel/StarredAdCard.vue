<template>
  <v-card
      shaped
      elevation="6"
      class="pa-6 ma-6 white--text"
      style="
      background: rgb(161,156,251);
      background: linear-gradient(90deg, rgba(161,156,251,1) 0%, rgba(99,99,245,1) 68%);">
    <v-card-title class="mb-1 mt-0">
      {{ ad.marked.name }}
    </v-card-title>
    <v-card-text class="my-2 mx-2 ">
      <v-row class="white--text">
        <p>{{ ad.marked.description }}</p>
      </v-row>
      <v-row class="my-4 mx-2 white--text" v-if="ad.marked.email">
        <v-icon class="white--text">mdi-email</v-icon>
        ایمیل:
        {{ ad.marked.email }}
      </v-row>
      <v-row class="my-4 mx-2 white--text" v-if="ad.marked.phone">
        <v-icon class="white--text">mdi-phone</v-icon>
        شماره تماس:
        {{ ad.marked.phone }}
      </v-row>
    </v-card-text>
    <v-card-actions class="justify-center align-center mt-1 mb-0">
      <v-btn name="more-info-btn" width="40%" text color="white" :to="'/c/' + ad.marked.id">
        <v-icon color="white" class="ml-2" style="bottom: 1px">{{ ImdiInfo }}</v-icon>
        <span>اطلاعات بیشتر</span>
      </v-btn>
      <v-btn name="delete-btn" width="40%" text color="white" @click="$emit('togglestar')">
        <v-icon color="white" class="ml-2" style="bottom: 1px">mdi-delete</v-icon>
        <span> حذف نشانک </span>
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
</style>
