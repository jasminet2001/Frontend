<template>
	<v-card class="pa-4" elevation="8" outlined height="75%" shaped justify="center" align="center" width="100%">
		<v-form ref="form" color="transparent" v-model="valid" lazy-validation>
			<v-card-title v-if="!isMobile">
				<img src="https://svgshare.com/i/g44.svg" class="card-pic">
			</v-card-title>
			<v-card-text>
				<v-row class="mt-5 mx-2" justify="center" align="center">
					<v-text-field v-model="email" name="input-9-2" :rules="emailRules" label="ایمیل" required style="direction: ltr !important;">
					</v-text-field>
				</v-row>
				<v-row class="mt-5 mx-2" justify="center" align="center">
					<v-text-field
						v-model="password1"
						:append-icon="show1 ? ImdiEye : ImdiEyeOff"
						:rules="[rules.required, rules.min]"
						:type="show1 ? 'text' : 'password'"
						name="input-10-1"
						label="رمز عبور"
						hint="حداقل ۸ کارکتر بنویسید."
						counter
						@click:append="show1 = !show1"
						style="direction: ltr !important;"
					></v-text-field>
				</v-row>
				<v-row class="mt-5 mx-2" justify="center" align="center">
					<v-text-field
						v-model="password2"
						:append-icon="show2 ? ImdiEye : ImdiEyeOff"
						:rules="[rules.required, rules.min]"
						:type="show2 ? 'text' : 'password'"
						name="input-10-2"
						label="رمز عبور"
						hint="حداقل ۸ کارکتر بنویسید"
						counter
						@click:append="show2 = !show2"
						style="direction: ltr !important;"
					></v-text-field>
				</v-row>
				<v-row class="mt-6" justify="center" no-gutters>
					<v-col cols="12">
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
import {mdiEye, mdiEyeOff} from "@mdi/js";
export default {
	props: {
		isMobile: {
			type: Boolean,
			default: false
		}
	},
	data () {
		return {
			ImdiEye: mdiEye,
			ImdiEyeOff: mdiEyeOff,
			show1: false,
			show2: false,
			password1: '',
			password2: '',
			email:'',
			name:'',
			rules: {
				required: password1 => !!password1 || 'رمز عبور لازم است!',
				min: v => v.length >= 8 || 'حداقل ۸ کارکتر بنویسید.',
			},
			emailRules: [
				v => !!v || 'ایمیل را وارد کنید',
				v => /.+@.+\..+/.test(v) || 'ایمیل صحیح وارد نمایید.',
			],
		}
	},
	methods:{
		async fetchData(){
			var axios = require('axios');
			var FormData = require('form-data');
			var data = new FormData();
			data.append('token', this.$route.params.token);
			data.append('email', this.email);
			data.append('password', this.password1);
			data.append('password_confirmation', this.password2);

			var config = {
				method: 'post',
				url: this.$store.state.host + 'user/submitnewpass',
				headers: {
					'Accept': 'application/json',
				},
				data : data
			};
			let toaster = (msg, type) => {
				this.$toast.open({
					message: msg,
					type: type,
				});
			};
			await axios(config)
				.then( () => {
					toaster('!بازیابی رمز عبور با موفقیت انجام شد! لطفا مجدد وارد شوید', 'success')
				})
				.catch(() => {
					toaster('!لینک نامعتبر است', 'error');
				});
		},
		Login(){
			this.$router.push('/login');
		},
	}
}
</script>

<style scoped>
@import '../../assets/styles/login-signup/login.css';
</style>
