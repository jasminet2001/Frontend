<template>
    <v-app>
        <CompanySidebarNavigationVue />
        <v-sheet fill-height color="transparent" class="pa-10">
            <v-row class="mb-5" align="center">
            <strong style="font-size: 1.5em">درخواست های دریافت شده</strong>
            </v-row>
            <hr class="my-3"/>
            <v-row justify="center" align="center" :dense="this.$vuetify.breakpoint.smAndDown">
            <v-col
                v-for="(ad, index) in adList"
                :key="index"
                cols="12"
                md="6"
                lg="4"
                xl="3">
                <CompanyReq :ad="ad" />
            </v-col>
            </v-row>
        </v-sheet>
    </v-app>
</template>

<script>
import CompanyReq from "./CompanyReqCard.vue"
import CompanySidebarNavigationVue from "./CompanySidebarNavigation.vue";
export default {
  components: {CompanySidebarNavigationVue, CompanyReq},
  data () {
    return {
      adList: [
        { Title: "نام آگهی", CompanyName: ":نام شرکت", Status: "پذیرفته شده"},
        { Title: "نام آگهی", CompanyName: ":نام شرکت", Status: "پذیرفته شده" },
        { Title: "نام آگهی", CompanyName: ":نام شرکت", Status: "پذیرفته شده" },
        { Title: "نام آگهی", CompanyName: ":نام شرکت" , Status: "پذیرفته شده"},
        { Title: "نام آگهی", CompanyName: ":نام شرکت", Status: "پذیرفته شده" },
        { Title: "نام آگهی", CompanyName: ":نام شرکت" , Status: "پذیرفته شده"},
        { Title: "نام آگهی", CompanyName: ":نام شرکت", Status: "پذیرفته شده" },
        { Title: "نام آگهی", CompanyName: ":نام شرکت", Status: "پذیرفته شده" },
        { Title: "نام آگهی", CompanyName: ":نام شرکت" , Status: "پذیرفته شده"},
        { Title: "نام آگهی", CompanyName: ":نام شرکت", Status: "پذیرفته شده" },
        { Title: "نام آگهی", CompanyName: ":نام شرکت" , Status: "پذیرفته شده"},
        { Title: "نام آگهی", CompanyName: ":نام شرکت" , Status: "پذیرفته شده"}
      ]
    }
  }
}
</script>

