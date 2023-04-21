<template>
  <section class="pt-16">
		<v-img class="mx-auto rounded-circle" height="35em" max-width="60%" contain :src="sliderAddress"></v-img>
		<v-row class="pa-16 pt-5">
			<v-col class="category-label mx-1" v-for="(item, key) in items" :key="key" @mouseover="slideChanger(item.photo)">
				{{item.name}}
			</v-col>
		</v-row>
	</section>
</template>

<script>
export default {
  data(){
    return{
      select: ['دسته بندی'],
			sliderAddress: 'https://files.virgool.io/upload/users/3216/posts/uzihttim3v9i/poslzzhshkyu.jpeg',
			items: [
				{
					id: 9,
					name: "غذایی",
					photo: "https://www.atlas-group.co/myupload/filethumb/thumb_1667296573.jpg"
				},
				{
					id: 10,
					name: "ریخته گری",
					photo: "https://blog.faradars.org/wp-content/uploads/2021/09/sand-casting-1.jpg"
				},
				{
					id: 11,
					name: "الکتریکی",
					photo: "https://shirazknuaf.ir/wp-content/uploads/2021/12/barqi-1000x563.jpg"
				},
				{
					id: 12,
					name: "پلاستیک",
					photo: "https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1397/07/01/1397070111031372915474444.jpg"
				},
				{
					id: 13,
					name: "خودرو",
					photo:  "https://digiato.com/wp-content/uploads/2022/10/problems-car-parts-identification-plan-solution.jpg"
				},
				{
					"id": 14,
					"name": "شیشه",
					photo: "https://koolivand.com/wp-content/uploads/2016/01/decorative-glass-gallery-2-1024x512.jpg"
				},
				{
					"id": 15,
					"name": "فلزی",
					photo: "https://ahanbox.com/wp-content/uploads/2019/01/%D9%81%D9%84%D8%B2%D8%A7%D8%AA-%D8%BA%DB%8C%D8%B1-%D8%A2%D9%87%D9%86%DB%8C.jpg"
				},
				{
					"id": 16,
					"name": "رنگ",
					photo: "https://rangtehran.ir/wp-content/uploads/2021/07/Paint-and-Coatings.jpg"
				},
				{
					"id": 17,
					"name": "آبکاری",
					photo: "https://nanoplus.org/wp-content/uploads/2021/10/999.jpg"
				},
				{
					"id": 18,
					"name": "پزشکی",
					photo: "https://media.tahlilbazaar.com/d/2021/10/09/3/90762.jpg"
				}
			],
    }
  },
  methods: {
    async fetchData() {
      let axios = require('axios');
      let FormData = require('form-data');
      let data = new FormData();
      let config = {
        method: 'get',
        url: this.$store.state.host + 'categories',
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      let that = this;
      await axios(config)
          .then(function (response) {
            that.items = response.data.categories
						console.log(JSON.stringify(response.data.categories))
          })
    },
		slideChanger(address){
			this.sliderAddress = address
			console.log(address)
		}
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.category-label{
	border-radius: 50px;
	text-align: center;
	border: 1px solid #9FA2B4;
	min-width: 7em;
}
.category-label:hover{
	background: #999696;
	color: white;
}
</style>

