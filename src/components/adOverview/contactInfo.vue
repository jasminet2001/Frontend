<template>
<v-card elevation="16" rounded class="pa-3">
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1.5rem">
        <v-icon size="3rem" color="#002F50">mdi-account-circle</v-icon>
        <span>شرکت آزمایشی</span>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <hr class="mx-3">
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-icon class="ml-3" size="1.5rem" color="#002F50">mdi-phone</v-icon>
        <a href="tel:09123456789">09123456789</a>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-icon class="ml-3" size="1.5rem" color="#002F50">mdi-email</v-icon>
        <a href="mailto:sep.mirshahi@gmail.com">sep.mirshai@gmail.com</a>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-icon class="ml-3" size="1.5rem" color="#002F50">mdi-web</v-icon>
        <a href="http://sepehr.com">sepehr.com</a>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</v-card>
</template>

<script>
export default {
  name: "contactInfo"
}
</script>

<style scoped>
a{
  color: black !important;
  text-decoration: none;
}
a:hover{
  color: #0e1a58 !important;
  font-weight: bold;
}
</style>