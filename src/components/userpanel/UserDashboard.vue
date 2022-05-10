<template>
  <v-main>
    <top-display-row :item-list="cardsList" />
    <ads-container :ads-list="adsList" />
    <v-sheet v-if="this.$vuetify.breakpoint.mdAndUp" class="pa-8">
      <v-row>
        <v-col cols="6">
          <dashboard-checklist />
        </v-col>
        <v-col cols="6">
          <unanswered-tickets />
        </v-col>
      </v-row>
    </v-sheet>
    <div v-else>
      <dashboard-checklist class="mb-3"/>
      <UnansweredTickets />
    </div>
  </v-main>
</template>

<script>
import TopDisplayRow from "@/components/userpanel/TopDisplayRow";
import AdsContainer from "@/components/userpanel/AdsContainer";
import DashboardChecklist from "@/components/userpanel/DashboardChecklist";
import UnansweredTickets from "@/components/userpanel/UnansweredTickets";

export default {
  components: {UnansweredTickets, AdsContainer, TopDisplayRow, DashboardChecklist},
  data () {
    return {
      cardsList: [
        { Title: 'بازدید از آگهی های شما', Info: '۶۴'},
        { Title: 'آگهی های شما', Info: '۵'},
        { Title: 'آگهی های مربوط', Info: '۱۶'},
        { Title: 'کل آگهی ها', Info: '۳۲۵'}
      ],
      adsList: [
        { Title: 'کلین روم برای شرکت دارو سازی', Date: '۱۴۰۱/۲/۱۳', Author: 'علی مهربان', Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', Link: '/' },
        { Title: 'کلین روم برای شرکت دارو سازی', Date: '۱۴۰۱/۲/۱۳', Author: 'علی مهربان', Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', Link: '/' },
        { Title: 'کلین روم برای شرکت دارو سازی', Date: '۱۴۰۱/۲/۱۳', Author: 'علی مهربان', Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', Link: '/' },
        { Title: 'کلین روم برای شرکت دارو سازی', Date: '۱۴۰۱/۲/۱۳', Author: 'علی مهربان', Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', Link: '/' },
        { Title: 'کلین روم برای شرکت دارو سازی', Date: '۱۴۰۱/۲/۱۳', Author: 'علی مهربان', Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', Link: '/' },
        { Title: 'کلین روم برای شرکت دارو سازی', Date: '۱۴۰۱/۲/۱۳', Author: 'علی مهربان', Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', Link: '/' },
        { Title: 'کلین روم برای شرکت دارو سازی', Date: '۱۴۰۱/۲/۱۳', Author: 'علی مهربان', Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', Link: '/' },
        { Title: 'کلین روم برای شرکت دارو سازی', Date: '۱۴۰۱/۲/۱۳', Author: 'علی مهربان', Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', Link: '/' },
        { Title: 'کلین روم برای شرکت دارو سازی', Date: '۱۴۰۱/۲/۱۳', Author: 'علی مهربان', Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', Link: '/' },
      ]
    }
  }
}
</script>

<style scoped>

</style>
