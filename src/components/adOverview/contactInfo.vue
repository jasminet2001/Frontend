<template>
<v-card v-if="info.company" elevation="16" rounded class="pa-3">
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1.5rem">
        <v-icon size="3rem" color="#002F50">mdi-account-circle</v-icon>
        <span>{{info.company.name}}</span>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <hr class="mx-3">
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-icon class="ml-3" size="1.5rem" color="#002F50">mdi-phone</v-icon>
        <a :href="`tel:${info.company.phone}`">{{info.company.phone}}</a>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-icon class="ml-3" size="1.5rem" color="#002F50">mdi-email</v-icon>
        <a :href="`mailto:${info.company.email}`">{{info.company.email}}</a>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item v-if="info.company.website">
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-icon class="ml-3" size="1.5rem" color="#002F50">mdi-web</v-icon>
        <a :href="`http://${info.company.website}`">{{info.company.website}}</a>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</v-card>
<v-card v-else elevation="16" rounded class="pa-3">
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1.5rem">
        <v-icon size="3rem" color="#002F50">mdi-account-circle</v-icon>
        <span>{{ info.name }}</span>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <hr class="mx-3">
  <v-list-item v-if="info.phone">
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-icon class="ml-3" size="1.5rem" color="#002F50">mdi-phone</v-icon>
        <a :href="`tel:${info.phone}`">{{info.phone}}</a>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-icon class="ml-3" size="1.5rem" color="#002F50">mdi-email</v-icon>
        <a :href="`mailto:${info.email}`">{{info.email}}</a>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</v-card>
</template>

<script>
export default {
  name: "contactInfo",
  props:[
      'info'
  ]
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