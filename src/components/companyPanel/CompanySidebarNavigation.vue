<template>
  <v-card class="overflow-hidden" dir="rtl">
    <v-navigation-drawer
		permanent
		v-model="$data[$vuetify.breakpoint.smAndDown ? 'drawer' : 'value']"
		expand-on-hover
		:value="true"
		dark
		fixed
		hide-overlay
		rail
		right
    >
      <v-list dense nav>
        <v-list-item class="px-2">
          <v-img
            :src="
              this.$cookies.get('user').avatar
                ? 'https://192.168.1.8/storage/avatars/' +
                  this.$cookies.get('user').avatar
                : this.$store.state.appURL + 'images/avatar.png/'
            "
            width="10rem"
          ></v-img>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6 white--text">
              {{ this.$cookies.get("user").name }}
            </v-list-item-title>
            <v-list-item-subtitle class="white--text">
              {{ this.$cookies.get("user").email }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item-group
          v-model="group"
          active-class="grey lighten-4--text text--accent-4"
        >
          <v-list-item class="py-2" link to="/company/dashboard">
            <v-list-item-icon>
              <v-icon>mdi-monitor-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>داشبورد</v-list-item-title>
          </v-list-item>

          <v-list-item class="py-2" link to="/company/editprofile">
            <v-list-item-icon>
              <v-icon>mdi-account-edit-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ویرایش پروفایل</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/company/changepass">
            <v-list-item-icon>
              <v-icon>mdi-lock-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ویرایش رمز عبور</v-list-item-title>
          </v-list-item>

          <v-list-item class="py-2" link to="/company/bookmarks">
            <v-list-item-icon>
              <v-icon>mdi-bookmark-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>نشانک ها</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/company/related" class="py-2">
              <v-list-item-icon>
                <v-icon>mdi-bell-check-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>درخواست‌های مرتبط</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/company/recievedrequests" class="py-2">
              <v-list-item-icon>
                <v-icon>mdi-inbox-arrow-down-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>درخواست های دریافت شده</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/company/sentrequests" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-inbox-arrow-up-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>درخواست های ارسال شده</v-list-item-title>
          </v-list-item>

          <v-list-item class="py-2" link to="/company/subad">
            <v-list-item-icon>
              <v-icon>mdi-form-select</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ثبت آگهی</v-list-item-title>
          </v-list-item>

          <v-list-item class="py-2" link to="/company/payment">
            <v-list-item-icon>
              <v-icon>mdi-credit-card-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>کیف پول</v-list-item-title>
          </v-list-item>

					<v-list-item class="py-2" link to="/company/adslist">
						<v-list-item-icon>
							<v-icon>mdi-file-document-edit-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title>آگهی های من</v-list-item-title>
					</v-list-item>

          <v-list-item class="py-2" link to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>صفحه اصلی</v-list-item-title>
          </v-list-item>
				</v-list-item-group>
			</v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item name="logout" link @click="logout">
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
	props: () => ({
		update: false,
	}),
	methods: {
		logout() {
			this.$cookies.remove('user')
			this.$cookies.remove('token')
			this.$router.push('/')
		},
		async updater() {
			let axios = require('axios');
			let config = {
				method: 'get',
				url: this.$store.state.host + 'authentication/this',
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer ' + this.$cookies.get('token')
				},
			};
			let that = this;
			await axios(config)
					.then(function (response) {
						that.$cookies.set('user', response.data)
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

<style scoped>
.v-navigation-drawer__content {
height: 100%;
overflow-y: auto;
overflow-x: hidden;
}
</style>
