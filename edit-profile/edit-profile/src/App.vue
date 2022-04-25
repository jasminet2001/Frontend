<template>
  <v-app>
    <navbar/>
    <edit-profile-vue/>
  </v-app>
</template>

<script>
import editProfileVue from './components/edit-profile.vue';
import navbar from './components/navbar-item.vue'


export default {
  name: 'App',

  components: {
    navbar,
    editProfileVue
  },

  data: () => ({
    //
  }),
};
</script>
