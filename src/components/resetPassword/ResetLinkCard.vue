<template>
	<v-card align="center" class="pa-4" elevation="8" height="75%" justify="center" outlined shaped>
		<v-form ref="form" v-model="valid" color="transparent" lazy-validation>
			<v-card-title v-if="!isMobile">
				<img class="card-pic" src="https://svgshare.com/i/g44.svg">
			</v-card-title>
			<v-card-text>
				<v-row align="center" class="mt-8 mx-2" justify="center" no-gutters>
					<v-col cols="12">
						<v-row>
							<p class="mt-3" style="margin: 0 auto;">حساب کاربری ندارید؟</p>
							<a class="mt-3" style="color:black; text-decoration:none; font-style: italic; margin: 0 auto" @click="SignUp()">
								ثبت نام کنید</a>
						</v-row>
					</v-col>
				</v-row>
				<v-row align="center" class="mt-5 mx-2" justify="center">
					<v-text-field
						v-model="email"
						:rules="emailRules"
						label="ایمیل"
						name="input-10-0"
						required
						style="direction: ltr !important;">
					</v-text-field>
				</v-row>
				<v-row align="center" class="mt-16 mx-2" justify="center" no-gutters>
					<v-col cols="6">
						<v-btn class="button white--text" color="#000824" width="100%" @click="fetchData()">
							بازیابی رمز عبور
						</v-btn>

					</v-col>
				</v-row>
			</v-card-text>
		</v-form>
	</v-card>
</template>

<script>
import {mdiEye, mdiEyeOff} from '@mdi/js';

export default {
	props: {
		isMobile: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			ImdiEye: mdiEye,
			ImdiEyeOff: mdiEyeOff,
			show1: false,
			password: '',
			email: '',
			emailRules: [
				v => !!v || 'ایمیل را وارد کنید',
				v => /.+@.+\..+/.test(v) || 'ایمیل صحیح وارد نمایید',
			],
		}
	},
	methods: {
		async fetchData() {
			let axios = require('axios');
			let FormData = require('form-data');
			let data = new FormData();
			data.append('email', this.email);
			var config = {
				method: 'post',
				url: this.$store.state.host + 'user/resetpass',
				headers: {
					'Accept': 'application/json',
				},
				data: data
			};
			let toaster = (msg, type) => {
				this.$toast.open({
					message: msg,
					type: type,
				});
			};
			await axios(config)
				.then(function () {
					toaster('!برای بازیابی رمز عبور ایمیل خود را چک کنید', 'success')
				})
				.catch(function () {
					toaster('!این ایمیل در سامانه ثبت نشده است', 'error');
				});
		},
		SignUp() {
			this.$router.push('/signup');
		},
	}
}
</script>

<style scoped>
@import '../../assets/styles/login-signup/login.css';
</style>
