<template>
  <v-app>
    <v-sheet fill-height color="transparent" class="pa-10">
      <v-row class="mb-5" align="center">
        <strong style="font-size: 1.5em">نشانک ها</strong>
      </v-row>
      <hr class="my-3"/>
      <v-row justify="center" align="center" :dense="this.$vuetify.breakpoint.smAndDown">
        <v-col v-for="item in adList" :key="item.id">
          <ad-card :ad="item"/>
        </v-col>
      </v-row>
    </v-sheet>
  </v-app>
</template>

<script>
import AdCard from "@/components/userpanel/AdCard";
export default {
  components: {AdCard},
  data () {
    return {
      // adList: [
      //   { Pic: "", Title: "سلام", Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", isStarred: true },
      //   { Pic: "", Title: "سلام", Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", isStarred: true },
      //   { Pic: "", Title: "سلام", Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", isStarred: true },
      //   { Pic: "", Title: "سلام", Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", isStarred: true },
      //   { Pic: "", Title: "سلام", Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", isStarred: false },
      //   { Pic: "", Title: "سلام", Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", isStarred: true },
      //   { Pic: "", Title: "سلام", Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", isStarred: false },
      //   { Pic: "", Title: "سلام", Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", isStarred: false },
      //   { Pic: "", Title: "سلام", Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", isStarred: true },
      //   { Pic: "", Title: "سلام", Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", isStarred: false },
      //   { Pic: "", Title: "سلام", Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", isStarred: false },
      //   { Pic: "", Title: "سلام", Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", isStarred: false }
      // ]
      adList:[],
      marked_id_list: [],
      pic:"",
      title: "",
      description: "",
      category: "",
    }
  },
  computed: {
    starredAds () {
      return this.adList.filter((x) => x.isStarred)
    }
  },
  methods: {
    toggleStarred(index) {
      this.adList[index].isStarred = !this.adList[index].isStarred
    },
    async get_company (id = this.$route.params.id) {
      var axios = require('axios');
      var config = {
        method: 'get',
        url: this.$store.state.host + 'company/show/' + id,
        headers: {
          'Accept': 'application/json',
        },
      };
      let that = this;
      try {
        const response = await axios(config);
        that.adList.push(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async showBookmarks() {
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
            that.marked_id_list = [];
            for (let i = 0; i < response.data.length; i++) {
              that.marked_id_list.push(response.data[i].marked_id);
            }
          })

      for (let i = 0; i < this.marked_id_list.length; i++) {
        that.get_company(that.marked_id_list[i]);
      }
      console.log(this.adList);
    },
  },
  created(){
    this.showBookmarks();
  }
}
</script>

<style scoped>

</style>
