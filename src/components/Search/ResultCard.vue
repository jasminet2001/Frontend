<template>
  <v-card
      class="mx-auto my-1"
      outlined
      shaped
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline pa-0 mb-4">
          <v-chip
              class="pa-2"
              color="orange"
              text-color="white"
          >
            {{category}}
          </v-chip>
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{name}}
        </v-list-item-title>
        <v-list-item-subtitle>{{description}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
          tile
          size="80"
          color="transparent"
      >
        <img
            :src="image"
            alt="Avatar"
            v-if="image"
        />
        <v-icon
            v-else
            class="text-white">
          mdi-image-off-outline
        </v-icon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "CompanyCard",
  OnMounted() {
    this.$vuetify.rtl = true;
  },
  props: {
    name: {
      type: String,
      default: "بدون نام",
    },
    category: {
      type: String,
    },
    description: {
      type: String,
      default: "بدون توضیحات",
    },
    image: {
      type: String,
      default: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    },
  },
}
</script>

<style scoped>

</style>