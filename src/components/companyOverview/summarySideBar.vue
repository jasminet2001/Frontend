<template>
<v-card name="summary-side-bar" v-if="name" elevation="2" rounded class="pa-3">
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1.5rem">
        <v-icon large color="#000930" class="ml-2">mdi-domain</v-icon>
        <span>{{ name }}</span>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <hr class="mx-3">
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-row>
          <v-col cols="1">
            <v-icon class="ml-3" color="#000930">mdi-account</v-icon>
          </v-col>
          <v-col cols="10" align="left">
            <span>{{ owner }}</span>
          </v-col>
        </v-row>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-row>
          <v-col cols="1">
            <v-icon class="ml-3" color="#000930">mdi-phone</v-icon>
          </v-col>
          <v-col cols="10" align="left">
            <a :href="`tel:${ phone }`">{{ phone }}</a>
          </v-col>
        </v-row>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-row>
          <v-col cols="1">
            <v-icon class="ml-3" color="#000930">mdi-email</v-icon>
          </v-col>
          <v-col cols="10" align="left">
            <a :href="`mailto:${ email }`">{{ email }}</a>
          </v-col>
        </v-row>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item v-if="website">
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-row>
          <v-col cols="1">
            <v-icon class="ml-3" color="#000930">mdi-web</v-icon>
          </v-col>
          <v-col cols="10" align="left">
            <a :href="`http://${website}`">{{website}}</a>
          </v-col>
        </v-row>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</v-card>
<v-card v-else elevation="16" rounded class="pa-3">
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1.5rem">
        <v-icon size="3rem" color="#002F50">mdi-account-circle</v-icon>
        <span>{{ name }}</span>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <hr class="mx-3">
  <v-list-item v-if="phone">
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-icon class="ml-3" size="1.5rem" color="#002F50">mdi-phone</v-icon>
        <a :href="`tel:${phone}`">{{phone}}</a>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title style="font-size: 1rem">
        <v-icon class="ml-3" size="1.5rem" color="#002F50">mdi-email</v-icon>
        <a :href="`mailto:${email}`">{{email}}</a>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</v-card>
</template>

<script>
export default {
  data () {
    return {
      info: {
        company: {
          name: 'کاله',
          phone: '۰۲۱۸۸۸۸۸۸۸۸',
          email: 'kaleh@kaleh.kaleh',
          website: 'kaleh.kaleh',
          owner: 'کاله کاله پور'
        }
      }
    }
  },
  props:[
    'name',
    'phone',
    'email',
    'website',
    'owner'
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
