<template>
  <v-sheet color="transparent" class="pa-4">
    <div class="pa-4">
      <v-row class="mt-16">
        <strong style="font-size: 1.5em">آگهی ها</strong>
      </v-row>
      <!-- <hr class="my-3"/> -->
      <v-row>
        <v-spacer />
        <v-col v-for="(item, index) in adsToShow" cols="12" md="6" lg="6" xl="6" :key="index">
          <ads-list-ad-card :item="item" />
        </v-col>
        <v-spacer />
      </v-row>
      <v-btn
          v-if="itemsToShow < adsList.length"
          width="100%"
          class="mt-2"
          @click="showMore"
      >
        بارگذاری بیشتر
        <v-icon small>
          {{ ImdiDoubleDown }}
        </v-icon>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
import AdsListAdCard from "@/components/userpanel/AdsListAdCard";
import { mdiChevronDoubleDown } from '@mdi/js'
export default {
  components: {AdsListAdCard},
  props: {
    adsList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      itemsToShow: 4,
      ImdiDoubleDown: mdiChevronDoubleDown
    }
  },
  computed: {
    adsToShow () {
      return this.adsList.filter((el, i) => (i < this.itemsToShow))
    }
  },
  methods: {
    showMore () {
      if (this.itemsToShow + 8 >= this.adsList.length) {
        this.itemsToShow = this.adsList.length
      } else {
        this.itemsToShow += 8
      }
    }
  }
}
</script>

<style scoped>
</style>
