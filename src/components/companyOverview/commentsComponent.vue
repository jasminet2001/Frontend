<template>
  <v-card elevation="2" class="px-8 py-5" style="width: 100%">
    <v-card-title>
      ارسال نظر
    </v-card-title>
    <v-alert v-if="successAlert" outlined text type="success">
      نظر شما با موفقیت ثبت شد!
    </v-alert>
    <v-text-field
      class="rounded-lg"
      outlined
      v-model="name"
      placeholder="نام و نام خانوادگی"></v-text-field>
    <v-row class="mb-1" align="center">
      <v-col cols="12" sm="4" md="3" lg="3" xl="3">
        <span style="bottom: 5px"> امتیاز شما:‌</span>
      </v-col>
      <v-col cols="12" sm="8" md="9" lg="9" xl="9" align="center">
        <v-rating
            :empty-icon="ImdiStarOutline"
            :full-icon="ImdiStar"
            :half-icon="ImdiStarHalf"
            hover
            v-model="rating"
            length="5"
            color="yellow"
            background-color="gray"
            style="direction: ltr;"
        ></v-rating>
      </v-col>
    </v-row>
    <v-textarea
      height="100px"
      class="rounded-lg"
      outlined
      v-model="commentText"
      placeholder="نظر خود را بنویسید..."></v-textarea>
    <v-row class="px-3 pb-5">
      <v-spacer />
      <v-btn color="yellow" class="rounded-lg" @click="sendComment">ارسال نظر</v-btn>
    </v-row>
  </v-card>
</template>

<script>
import { mdiStar, mdiStarHalfFull, mdiStarOutline } from '@mdi/js'
export default {
  data () {
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
      ImdiStarOutline: mdiStarOutline
    }
  },
  methods: {
    sendComment () {
      this.successAlert = true
      // setTimeout(() => {
      //   this.successAlert = false
      // }, 2000)
    }
  }
}
</script>

<style scoped>

</style>
