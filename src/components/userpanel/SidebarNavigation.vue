<template>
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
        <v-list-item-avatar class="mx-auto">
          <v-img :src="this.$cookies.get('user').avatar?'http://localhost:8000/storage/avatars/'+this.$cookies.get('user').avatar:'images/avatar.png/'"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title
          class="text-h6 white--text">
            {{this.$cookies.get('user').name}}
          </v-list-item-title>
          <v-list-item-subtitle
          class="white--text">
            {{this.$cookies.get('user').email}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav
    dense
    >
      <v-list-item link to="/userpanel">
        <v-list-item-icon>
          <v-icon>mdi-monitor-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-title>داشبورد</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/editprofile">
        <v-list-item-icon>
          <v-icon>mdi-account-edit-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ویرایش پروفایل</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/changepass">
        <v-list-item-icon>
          <v-icon>mdi-lock-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>تغییر رمز عبور</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/bookmarks">
        <v-list-item-icon>
          <v-icon>mdi-bookmark-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>نشانک ها</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/subAds">
        <v-list-item-icon>
          <v-icon>mdi-form-select</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ثبت آگهی</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/UserUpgrade">
        <v-list-item-icon>
          <v-icon>mdi-arrow-u-up-right-bold</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ارتقای حساب</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/ticketing">
        <v-list-item-icon>
          <v-icon>mdi-ticket-confirmation-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ارسال تیکت</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/MyAdsList">
        <v-list-item-icon>
          <v-icon>mdi-file-document-edit-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>آگهی های من</v-list-item-title>
      </v-list-item>
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

      <v-list-item link @click="logout">
        <v-list-item-icon>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-list-item-icon>
        <v-list-item-title>خروج</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- responsive -->
  <v-card
  class=" overflow-hidden"
  v-else
  fixed
  >
    <v-app-bar
    color="grey darken-4"
    dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
    v-model="drawer"
    fixed
    temporary
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
          <v-list-item link to="/userpanel" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-monitor-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>داشبورد</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/editprofile" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-account-edit-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ویرایش پروفایل</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/changepass">
            <v-list-item-icon>
              <v-icon>mdi-lock-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ویرایش پسوورد</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/bookmarks" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-bookmark-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>نشانک ها</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/subAds" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-form-select</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ثبت آگهی</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/userUpgrade" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-arrow-u-up-right-bold</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ارتقای حساب</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/ticketing" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-ticket-confirmation-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ارسال تیکت</v-list-item-title>
          </v-list-item>

        <v-list-item link to="/MyAdsList" class="py-2">
          <v-list-item-icon>
            <v-icon>mdi-file-document-edit-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>آگهی های من</v-list-item-title>
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

        <v-list-item link @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-title>خروج</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    logout(){
      this.$cookies.remove('user')
      this.$cookies.remove('token')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
