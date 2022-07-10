<template>
<v-app>
  <app-bar />
  <top-header />
  <div class="pa-16 ma-16">
  <about-card
      style="height: 20%"
      :right="true"
      title="درباره ما"
      icon="mdi-information"
      text="صنعت یاب اولین وبسایت برون‌سپاری ایرانی در سطح شرکت های متوسط و بزرگ است که کار خود را از سال 1401 شروع کرد. امکانات صنعت یاب با ایجاد محیطی امن برای شرکت ها ارتباطات بین مجریان و خریداران را بهبود می‌بخشد. خریداران (افرادی که نیاز دارند پروژه‌ای را برون‌سپاری کنند) درخواستشان را به صورت خصوصی یا عمومی ثبت می‌کنند تا توسط مجریان (شرکت هایی که توانایی و تخصص انجام آن پروژه را دارند) انجام شود."
  /><about-card
      style="height: 20%"
      :right="false"
      title="هدف ما"
      icon="mdi-crown-circle-outline"
      text="با بهره گیری از فناوری، برای شرکت ها تجربه ای خوشایند از برون سپاری پروژه ها را ایجاد می‌کنیم. می‌خواهیم به شرکت های ایرانی کمک کنیم تا با قدرت تکنولوژی توانمندی خود را بیشتر و بهتر به معرض نمایش بگذارند. کمک به گذار از اقتصاد سنتی به اقتصاد دیجیتال، همسو با روندهای جهانی، مأموریت ما برای گسترش بازاری به وسعت ایران برای همه شرکت هاست."
  /><about-card
      style="height: 20%"
      :right="true"
      title="چشم انداز ما"
      icon="mdi-eye"
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی"
  />
  </div>
  <bottom-footer />
</v-app>
</template>

<script>
import TopHeader from "../Search/Header";
import BottomFooter from "../homepage/HomepageFooter";
import AppBar from "../homepage/AppBar";
import AboutCard from "@/components/aboutUs/aboutCard";
export default {
  name: "aboutComponent",
  components: {
    TopHeader,
    BottomFooter,
    AppBar,
    AboutCard
  }
}
</script>

<style scoped>
</style>