<template>
  <v-app>
    <navbar/>
  </v-app>
</template>

<script>
import navbar from './components/navbar-item.vue'

export default {
  name: 'App',

  components: {
    navbar,
  },

  data: () => ({
    //
  }),
};
</script>
