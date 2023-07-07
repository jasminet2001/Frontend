<template>
	<v-card name="comment-component">
		<v-card-title>
			نظرات شما
		</v-card-title>
		<v-list three-line>
			<v-card
					v-for="comment in comments"
					:key="comment.user.id"
					class="mt-5"
			>
				<v-list-item>
					<v-list-item-avatar>
						<v-img :src='comment.user.avatar?comment.user.avatar:$store.state.appURL+"images/avatar.png/"'></v-img>
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title v-text="comment.user.name"></v-list-item-title>
						<v-rating
								:empty-icon="ImdiStarOutline"
								:full-icon="ImdiStar"
								:half-icon="ImdiStarHalf"
								background-color="#FFD700"
								color="#FFD700"
								length="5"
								readonly
								size="17"
								value="3"
						></v-rating>
						<v-list-item-subtitle v-text="comment.comment"></v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-card>
		</v-list>
	</v-card>
</template>

<script>

export default {
	name: "commentComponent",
	data() {
		return {
			comments: {}
		}
	},
	methods: {
		async getComments(id = this.$route.params.id) {
			var axios = require('axios');
			var config = {
				method: 'get',
				url: this.$store.state.host + 'Comment/GetByCompany/' + id,
				headers: {
					'Accept': 'application/json',
				},
			};
			let that = this;
			await axios(config)
					.then(function (response) {
						that.comments = response.data
					})
					.catch(function (error) {
						console.log(error);
					});
		},
	},
	beforeMount() {
		this.getComments()
	}
}
</script>

<style scoped>

</style>
