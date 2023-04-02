<template>
	<v-card
			class="overflow-hidden"
			dir="rtl"
	>
		<v-app-bar
				v-if="$vuetify.breakpoint.smAndDown"
				color="grey darken-4"
				dark
				dir="rtl"

		>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
		</v-app-bar>

		<v-navigation-drawer
				:expand-on-hover="$vuetify.breakpoint.mdAndUp"
				:value="$vuetify.breakpoint.smAndDown? drawer : true"
				dark
				fixed
				hide-overlay
				rail
				right
		>
			<v-list
					dense
					nav
			>
				<v-list-item class="px-2">
					<v-img
							:src="this.$cookies.get('user').avatar?'https://192.168.1.8/storage/avatars/'+this.$cookies.get('user').avatar:'images/avatar.png/'"
							width="10rem"></v-img>
				</v-list-item>

				<v-list-item link>
					<v-list-item-content>
						<v-list-item-title
								class="text-h6 white--text">
							{{ this.$cookies.get('user').name }}
						</v-list-item-title>
						<v-list-item-subtitle
								class="white--text">
							{{ this.$cookies.get('user').email }}
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>

				<v-divider></v-divider>

				<v-list-item-group
						v-model="group"
						active-class="grey lighten-4--text text--accent-4"
				>
					<v-list-item class="py-2" link to="/user/dashboard">
						<v-list-item-icon>
							<v-icon>mdi-monitor-dashboard</v-icon>
						</v-list-item-icon>
						<v-list-item-title>داشبورد</v-list-item-title>
					</v-list-item>

					<v-list-item class="py-2" link to="/user/editprofile">
						<v-list-item-icon>
							<v-icon>mdi-account-edit-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title>ویرایش پروفایل</v-list-item-title>
					</v-list-item>

					<v-list-item link to="/user/changepass">
						<v-list-item-icon>
							<v-icon>mdi-lock-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title>ویرایش رمز عبور</v-list-item-title>
					</v-list-item>

					<v-list-item class="py-2" link to="/user/bookmarks">
						<v-list-item-icon>
							<v-icon>mdi-bookmark-multiple</v-icon>
						</v-list-item-icon>
						<v-list-item-title>نشانک ها</v-list-item-title>
					</v-list-item>

					<v-list-item class="py-2" link to="/user/subads">
						<v-list-item-icon>
							<v-icon>mdi-form-select</v-icon>
						</v-list-item-icon>
						<v-list-item-title>ثبت آگهی</v-list-item-title>
					</v-list-item>

					<v-list-item class="py-2" link to="/user/upgrade">
						<v-list-item-icon>
							<v-icon>mdi-arrow-u-up-right-bold</v-icon>
						</v-list-item-icon>
						<v-list-item-title>ارتقای حساب</v-list-item-title>
					</v-list-item>

					<v-list-item class="py-2" link to="payment">
						<v-list-item-icon>
							<v-icon>mdi-credit-card-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title>کیف پول</v-list-item-title>
					</v-list-item>

					<v-list-item class="py-2" link to="/user/myads">
						<v-list-item-icon>
							<v-icon>mdi-file-document-edit-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title>آگهی های من</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>

			<v-divider></v-divider>

			<v-list>
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
				url: this.$store.state.host + 'user/this',
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

</style>
