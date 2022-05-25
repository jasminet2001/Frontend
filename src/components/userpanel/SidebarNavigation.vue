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
      <v-list-item link @click="MyAds()">
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

      <v-list-item link>
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
          <v-list-item link @click="dashboard()" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-monitor-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>داشبورد</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="EditProf()" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-account-edit-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ویرایش پروفایل</v-list-item-title>
          </v-list-item>

          <v-list-item link class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-bookmark-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>نشانک ها</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="submitAds()" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-form-select</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ثبت آگهی</v-list-item-title>
          </v-list-item>

          <v-list-item link class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-arrow-u-up-right-bold</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ارتقای حساب</v-list-item-title>
          </v-list-item>

          <v-list-item link class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-ticket-confirmation-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ارسال تیکت</v-list-item-title>
          </v-list-item>

        <v-list-item link @click="MyAds()" class="py-2">
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

        <v-list-item link>
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
    dashboard(){
      this.$router.push('/userpanel');
    },
    EditProf(){
      this.$router.push('/editprofile');
    },
    submitAds(){
      this.$router.push('/subAds');
    },
    MyAds(){
      this.$router.push('/MyAdsList');
    },
  },

}
</script>

<style scoped>

</style>
