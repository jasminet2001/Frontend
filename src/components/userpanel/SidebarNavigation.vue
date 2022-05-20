<template>
  <div>
    <!-- desktop mode -->
    <v-navigation-drawer
      class="grey darken-4"
      v-if="this.$vuetify.breakpoint.mdAndUp"
      dark
      clipped
      right
      app
      permanent
      >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title
                class="text-h6 white--text">
              Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle
                class="white--text">
              sandra_a88@gmail.com
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav
      dense
      >
        <v-list-item link @click="dashboard()">
          <v-list-item-icon>
            <v-icon>mdi-monitor-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>داشبورد</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="EditProf()">
          <v-list-item-icon>
            <v-icon>mdi-account-edit-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ویرایش پروفایل</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-bookmark-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>نشانک ها</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="submitAds()">
          <v-list-item-icon>
            <v-icon>mdi-form-select</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ثبت آگهی</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-arrow-u-up-right-bold</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ارتقای حساب</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-ticket-confirmation-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ارسال تیکت</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-title>خروج</v-list-item-title>
        </v-list-item>
        <!-- fix this light mode -->
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-brightness-4</v-icon>
          </v-list-item-icon>
          <v-list-item-title>light mode</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- responsive -->
    <v-card v-else
      class="mx-auto overflow-hidden"
      height="400"
    >
      <v-app-bar
        color="deep-purple"
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
    methods: {
      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        }
        else {
          return false
        }
      },
      dashboard(){
        this.$router.push('/userpanel');
      },
      EditProf(){
        this.$router.push('/editprofile');
      },
      submitAds(){
        this.$router.push('/subAds');
      },
  },

}
</script>

<style scoped>
  label .menu {
    position: fixed;
    right: -100px;
    top: -100px;
    z-index: 100;
    width: 200px;
    height: 200px;
    color: white;
    background: #3751FF;
    border-radius: 50% 50% 50% 50%;
    -webkit-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    box-shadow: 0 0 0 0 #3751FF, 0 0 0 0 #3751FF;
    cursor: pointer;
  }

  label .hamburger {
    position: absolute;
    top: 135px;
    left: 50px;
    width: 30px;
    height: 2px;
    background: white;
    display: block;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
  }

  label .hamburger:after, label .hamburger:before {
    -webkit-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: white;
  }

  label .hamburger:before { top: -10px; }

  label .hamburger:after { bottom: -10px; }

  label input { display: none; }

  label input:checked + .menu {
    box-shadow: 0 0 0 100vw #3751FF, 0 0 0 100vh #3751FF;
    border-radius: 0;
  }

  label input:checked + .menu .hamburger {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  label input:checked + .menu .hamburger:after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    bottom: 0;
  }

  label input:checked + .menu .hamburger:before {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    top: 0;
  }

  label input:checked + .menu + ul { opacity: 1; }

  label ul {
    z-index: 200;
    position: fixed;
    top: 52%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    -webkit-transition: .1s 0s ease-in-out;
    transition: .1s 0s ease-in-out;
    list-style-type: none;
  }

  label a {
    font-weight: bold;
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 3em;
    padding-bottom: .5em;
    display: block;
    color: white;
    text-decoration: none;
    border-bottom: 1px solid white;
  }
  label a:active, label a:hover {
    border-bottom-color:#a6b1f7e3;
}
</style>
