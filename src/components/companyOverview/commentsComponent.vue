<template>
	<section>
		<comment-component :comments="comments" class="mb-5 pa-3"/>
		<v-card name="commentscomponent" class="px-8 py-5" elevation="2" style="width: 100%">
			<v-card-title>
				ارسال نظر
			</v-card-title>
			<v-alert v-if="successAlert" outlined text type="success">
				نظر شما با موفقیت ثبت شد!
			</v-alert>
			<v-row align="center" class="mb-1">
				<v-col cols="12" lg="3" md="3" sm="4" xl="3">
					<span style="bottom: 5px"> امتیاز شما:</span>
				</v-col>
				<v-col align="center" cols="12" lg="9" md="9" sm="8" xl="9">
					<v-rating
							:empty-icon="ImdiStarOutline"
							:full-icon="ImdiStar"
							:half-icon="ImdiStarHalf"
							background-color="#FFD700"
							color="#FFD700"
							length="5"
							hover
							size="47"
							v-model="rating"
					></v-rating>
				</v-col>
			</v-row>
			<v-textarea
					v-model="commentText"
					class="rounded-lg"
					height="100px"
					outlined
					placeholder="نظر خود را بنویسید..."></v-textarea>
			<v-row class="px-3 pb-5">
				<v-spacer/>
				<v-btn class="rounded-lg" color="yellow" @click="sendComment">ارسال نظر</v-btn>
			</v-row>
		</v-card>
	</section>
</template>

<script>
import {mdiStar, mdiStarHalfFull, mdiStarOutline} from '@mdi/js'
import CommentComponent from "@/components/companyOverview/commentComponent";

export default {
	components: {CommentComponent},
	data() {
		return {
			commentText: '',
			successAlert: false,
			failAlert: false,
			rating: '',
			ImdiStar: mdiStar,
			ImdiStarHalf: mdiStarHalfFull,
			ImdiStarOutline: mdiStarOutline,
			comments: []
		}
	},
	methods: {
		async sendComment() {
			var axios = require('axios');
			var FormData = require('form-data');
			var data = new FormData();
			data.append('company_id', this.$route.params.id);
			data.append('rating', this.rating);
			data.append('comment', this.commentText);

			var config = {
				method: 'post',
				url: this.$store.state.host + 'Comment/Add',
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Bearer '+this.$cookies.get('token'),
					'Content-Type': 'multipart/form-data'
				},
				data : data
			};
			let errorToaster = (msg) => {
				this.$toast.open({
					message: msg,
					type: 'error',
				});
			};
			let that = this
			await axios(config)
					.then(() => {
						that.successAlert = true
					})
					.catch(error => {
						console.log(error);
						if (error.response.status === 422) {
							for (let err in error.response.data.errors) {
								errorToaster(error.response.data.errors[err][0]);
							}
						}
						else if (error.response.status === 401){
							errorToaster("لطفا برای ارسال نظر ابتدا وارد شوید")
						}
					});
		}
	}
}
</script>

<style scoped>

</style>
