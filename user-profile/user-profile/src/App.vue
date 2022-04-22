<template>
  <v-app>
    <navbar-item/>
    <dashboard-item class="mr-16"/>
  </v-app>
</template>

<script>
import DashboardItem from './components/dashboard-item.vue'
import navbarItem from './components/navbar-item.vue'

export default {
  components: { 
    navbarItem,
    DashboardItem 
  },
  name: 'App',

}
</script>
