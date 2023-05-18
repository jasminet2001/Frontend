<template>
	<v-app>
		<app-bar></app-bar>
		<v-sheet class="py-10 px-15">
			<v-row>
				<header-component
						:company-category="categoryName(companyInfo.category_id)"
						:company-name="companyInfo.name"
            :saved = this.saved
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
		}
	},
	methods: {
    async issaved(id = this.$route.params.id) {
      try {
        let FormData = require('form-data');
        let data = new FormData();
        data.append('token', this.$cookies.get('token'));
        data.append('id', this.$route.params.id);
        var axios0 = require('axios');
        var config0 = {
          method: 'get',
          url: this.$store.state.host + `user/bookmarks/IsMarked/${id}`,
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.$cookies.get('token'),
            'Content-Type': 'multipart/form-data'
          },
          data: data
        };
        axios0(config0)
            .then((response) => {
              if (response.status === 200) {
                if (response.data.saved)
                  this.saved = false;
                else this.saved = true;
              }
            })
      } catch (error) {
        console.error(error);
        this.saved = false;
      }
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
	},
	async beforeMount() {
		await this.categoryFinder()
		await this.company()
    await this.issaved();
	}
}
</script>

<style scoped>
.btn {
	width: 100%;
	margin-top: 1rem;
}
</style>
