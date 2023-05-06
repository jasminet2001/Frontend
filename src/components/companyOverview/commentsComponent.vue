<template>
	<section>
		<comment-component :comments="comments" class="mb-5 pa-3"/>
		<v-card class="px-8 py-5" elevation="2" style="width: 100%">
			<v-card-title>
				ارسال نظر
			</v-card-title>
			<v-alert v-if="successAlert" outlined text type="success">
				نظر شما با موفقیت ثبت شد!
			</v-alert>
			<v-text-field
					v-model="name"
					class="rounded-lg"
					outlined
					placeholder="نام و نام خانوادگی"></v-text-field>
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
			loremParagraph: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
			loremOneLine: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			commentText: '',
			successAlert: false,
			failAlert: false,
			name: '',
			rating: '',
			ImdiStar: mdiStar,
			ImdiStarHalf: mdiStarHalfFull,
			ImdiStarOutline: mdiStarOutline,
			comments: [
				{
					user: {
						name: "سپهر",
						avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
					},
					comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
				},
				{
					user: {
						name: "سپهر",
						avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
					},
					comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
				}
			]
		}
	},
	methods: {
		async sendComment() {

		}
	}
}
</script>

<style scoped>

</style>
