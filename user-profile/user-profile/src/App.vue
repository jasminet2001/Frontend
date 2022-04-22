<template>
  <v-app>
    <navbar-item/>
    <div v-if="dashboard">
      <dashboard-item class="mr-16"/>
    </div>
    <div v-else>
      <edit-profile/>
    </div>
  </v-app>
</template>

<script>
import DashboardItem from './components/dashboard-item.vue'
import EditProfile from './components/edit-profile.vue';
import navbarItem from './components/navbar-item.vue'

export default {
  name: 'App',
  components: { 
    navbarItem,
    DashboardItem,
    EditProfile 
  },
    data() {
      return {
          dashboard: false,
      };
    }
}
</script>
