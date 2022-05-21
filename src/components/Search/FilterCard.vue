<template>
  <v-card
      class="mx-auto my-1"
      outlined
      shaped
  >
    <v-form>
      <legend class="font-weight-black">فیلتر ها</legend>
      <v-text-field
          label="عبارت جستجو را وارد کنید"
          v-model="text"
          hide-details="auto"
      ></v-text-field>
      <v-select
          :items="categories"
          item-text="name"
          item-value="id"
          v-model="category"
          label="دسته بندی"
      ></v-select>
      <p>جستجو برای: </p>
      <v-radio-group
          row
          v-model="searchFor"
          @change="$emit('searchType', searchFor)"
      >
        <v-radio
            label="آگهی"
            value="ad"
        >
        </v-radio>
        <v-radio
          label="شرکت"
          value="company">
        </v-radio>
        <v-radio
          label="هردو"
          value="both"
          aria-checked="true">
        </v-radio>
      </v-radio-group>
      <v-btn
          class="my-8 mx-auto align-center white--text"
          color="#000930"
          @click="$emit('search',{text:text,category:category})"
      >
        جستجو
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>

export default {
  name: "FilterCard",
  props: {
    categories: {
      type: Array,
      required: true
    },
  },
  data: () => ({
    searchFor: 'both',
    text: '',
    category: '',
  }),
  methods: {

  },
  mounted(){
    this.categoryFinder();
  }
}
</script>

<style scoped>

</style>