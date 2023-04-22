<template>
  <section class="my-16 py-5">
    <v-card
      elevation="10"
      :class="'mb-16 mt-6 pb-12 pt-16' + (right ? 'pr-10 pl-3' : 'pr-3 pl-10')"
      shaped
      id="card"
    >
      <v-card
        class="circle"
        :style="(right ? 'right' : 'left') + ': -3.5rem'"
        elevation="24"
      >
        <v-row class="justify-center">
          <v-icon color="rgb(0, 9, 48)" size="40">{{ icon }}</v-icon>
        </v-row>
        <v-row class="justify-center">
          <h5>{{ title }}</h5>
        </v-row>
      </v-card>
      <p>{{ text }}</p>
    </v-card>
  </section>
</template>

<script>
export default {
  name: "aboutCard",
  props: {
    title: String,
    icon: String,
    text: String,
    right: Boolean,
  },
};
</script>

<style scoped>
@import "../../assets/styles/aboutus/aboutcard.css";
</style>
