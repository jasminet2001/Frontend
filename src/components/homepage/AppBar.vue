<template>
  <!-- desktop -->
  <v-app-bar
  class="appbar"
  v-if="this.$vuetify.breakpoint.mdAndUp"
  clipped-right
  app
  elevate-on-scroll
  scroll-target="#scrolling-techniques-3"
  height="70%"
  >
    <v-tabs align-with-title >
      <v-tab to="/">صفحه اصلی</v-tab>
      <v-tab to="/search">جستجو</v-tab>
      <v-tab to="/about">درباره ما</v-tab>
      <v-spacer />
      <v-tab v-if="!loggedIn" >
        <v-btn-toggle background-color="#000930" shaped>
          <v-btn to="/login" color="white" elevation="0" tile flat outlined class="pa-5">ورود</v-btn>
          <v-btn to="/signup" color="white" elevation="0" tile flat outlined class="">ثبت نام</v-btn>
        </v-btn-toggle>
      </v-tab>
      <v-tab v-else to="/user/dashboard">
        <v-btn icon>
          <v-avatar
          color="transparent"
          size="50"
          >
            <v-img :src="avatar!=null?'http://localhost:8000/storage/avatars/'+avatar:'images/avatar.png/'"></v-img>
          </v-avatar>
        </v-btn>
      </v-tab>
    </v-tabs>
  </v-app-bar>

  <!-- responsive -->
  <v-card
  class="overflow-hidden"
  v-else
  fixed
  >
    <v-app-bar
    
    dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
    v-model="drawer"
    fixed
    temporary
    color="#000930"
    dark
    >
      <v-list
      nav
      dense
      >
        <v-list-item-group
        v-model="group"
        active-class="grey lighten-4--text text--accent-4"
        >
          <v-list-item link to="/" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>صفحه اصلی</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/search">
            <v-list-item-icon>
              <v-icon>mdi-archive-search</v-icon>
            </v-list-item-icon>
            <v-list-item-title>جستجو</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/about" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-card-account-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-title>درباره ما</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/login" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ورود</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/signup" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ثبت نام</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-brightness-4</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <v-switch
            v-model="$vuetify.theme.dark"
            inset
            label="Dark Mode"
            persistent-hint
          ></v-switch>
          </v-list-item-title>
        </v-list-item>

        <!-- for logging out -->
        <!-- <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-title>خروج</v-list-item-title>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default{
  name: 'AppBar',
  data(){
    return{
      tab:'',
      avatar:'',
      loggedIn: '',
      drawer: false,
      group: null,

    }
  },
  methods: {
    async updater() {
      let axios = require('axios');
      let config = {
        method: 'get',
        url: this.$store.state.host + 'user/this',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer '+this.$cookies.get('token')
        },
      };
      let that=this;
      await axios(config)
          .then(function (response) {
            that.avatar = response.data.avatar
            that.$cookies.set('user', response.data)
            that.loggedIn=!!that.$cookies.get('user')
          })
          .catch(() => {
            that.$cookies.remove('user');
            that.$cookies.remove('token');
          });
    },
  },
  beforeMount() {
    this.updater()
  }
}
</script>
<style scope lang="scss">
@import '../../assets/styles/colors.scss';

.appbar {
  background-color: $primary;
}
</style>
