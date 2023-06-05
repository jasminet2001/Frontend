<template>
	<v-app>
		<app-bar></app-bar>
		<v-sheet class="py-10 px-15">
			<v-row>
				<header-component
						:company-category="categoryName(companyInfo.category_id)"
						:company-name="companyInfo.name"
            :saved = this.saved
						:rate="rate"
				/>
			</v-row>
			<v-row>
				<v-col class="ma-0" cols="12" lg="3" md="4" xl="3">
					<summary-side-bar
							:email="companyInfo.email"
							:name="companyInfo.name"
							:owner="companyInfo.user.name"
							:phone="companyInfo.phone"
							:website="companyInfo.website"
					/>
				</v-col>
				<v-spacer/>
				<v-col cols="12" lg="9" md="8" xl="9">
					<description-component class="mb-4"/>
					<comments-component/>
				</v-col>
			</v-row>
		</v-sheet>
		<homepage-footer/>
	</v-app>
</template>

<script>

import appBar from "../homepage/AppBar";
import summarySideBar from "./summarySideBar"
import headerComponent from "./headerComponent"
import descriptionComponent from "./descriptionComponent"
import homepageFooter from "../homepage/HomepageFooter";
import CommentsComponent from "@/components/companyOverview/commentsComponent";

export default {
	components: {
		CommentsComponent,
		appBar,
		summarySideBar,
		headerComponent,
		descriptionComponent,
		homepageFooter
	},
	data() {
		return {
			companyInfo: '',
			categories: '',
			infoForSummary: [],
      saved: false,
			rate: 0,
			comments: {}
		}
	},
	methods: {
    async issaved(id = this.$route.params.id) {
      var axios = require('axios');
      var config = {
        method: 'get',
        url: this.$store.state.host + 'user/bookmarks',
        headers: {
          'Authorization': 'Bearer '+this.$cookies.get('token'),
          'Accept': 'application/json',
        },
      };
      let that = this;
      await axios(config)
          .then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
              if (response.data[i].marked_id == id)
              {
                that.saved = true;
              }
            }
          })
    },
		async company(id = this.$route.params.id) {
			var axios = require('axios');
			var config = {
				method: 'get',
				url: this.$store.state.host + 'company/show/' + id,
				headers: {
					'Accept': 'application/json',
				},
			};
			let that = this;
			await axios(config)
					.then(function (response) {
						that.companyInfo = response.data
					})
					.catch(function (error) {
						console.log(error);
					});
		},
		async rating(id = this.$route.params.id) {
			var axios = require('axios');
			var config = {
				method: 'get',
				url: this.$store.state.host + 'Comment/getAvgRate/' + id,
				headers: {
					'Accept': 'application/json',
				},
			};
			let that = this;
			await axios(config)
					.then(function (response) {
						that.rate = response.data.avg
					})
					.catch(function (error) {
						console.log(error);
					});
		},
		categoryFinder() {
			var axios = require('axios');
			var FormData = require('form-data');
			var data = new FormData();
			var config = {
				method: 'get',
				url: this.$store.state.host + 'categories',
				headers: {
					'Accept': 'application/json',
				},
				data: data
			};
			let that = this;
			axios(config)
					.then(function (response) {
						that.categories = response.data.categories;
						that.categories.unshift({id: '', name: 'همه'});
					})
		},
		categoryName(id) {
			for (let i = 0; i < this.categories.length; i++) {
				if (this.categories[i].id === id) {
					return this.categories[i].name;
				}
			}
		}
	},
	async beforeRouteUpdate(to) {
		await this.company(to.params.id);
    await this.issaved(to.params.id);
		await this.rating(to.params.id);
		await this.getComments(to.params.id);
	},
	async beforeMount() {
		await this.categoryFinder()
		await this.company()
    await this.issaved()
		await this.rating()
		await this.getComments()
	}
}
</script>

<style scoped>

</style>
