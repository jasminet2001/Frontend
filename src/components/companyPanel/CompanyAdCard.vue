<template>
  <v-card
    shaped
    elevation="6"
    class="pa-6 ma-6 white--text purple-background">
    <v-card-title class="mb-1 mt-0">
      {{ ad.title }}
    </v-card-title>
    <v-card-text class="my-2 mx-2" style="word-break: break-word;">
      <v-row class="white--text">
        <p>{{ ad.description }}</p>
      </v-row>
      <v-row class="my-4 mx-2 white--text">
        <v-icon class="white--text mx-2">mdi-eye</v-icon>
        {{ ad.ViewCount }}
      </v-row>
      <v-row class="my-4 mx-2 white--text">
        <v-icon class="white--text mx-2">mdi-shape</v-icon>
        <!-- how to translate it to name -->
        {{ ad.category_id }}
      </v-row>
      <span v-if="ad.receiver">
        <v-row class="my-4 mx-2 white--text">
          <v-icon class="white--text">mdi-status</v-icon>
          <p>پذیرفته شده</p>
        </v-row>
        <v-row>
          <v-icon class="white--text">mdi-user</v-icon>
          {{ ad.receiver.name }}
        </v-row>
      </span>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiInformationOutline } from "@mdi/js";
export default {
  props: {
    ad: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      ImdiInfo: mdiInformationOutline,
    };
  },
};
</script>
