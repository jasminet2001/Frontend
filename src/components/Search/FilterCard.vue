<template>
  <v-card
      class="mx-auto my-1"
      outlined
      shaped
  >
    <v-form>
      <legend class="font-weight-black">فیلتر ها</legend>
      <v-text-field
          label="دنبال چی می گردی؟"
          v-model="text"
          hide-details="auto"
      ></v-text-field>
      <v-select
          :items="items"
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
  data: () => ({
    items:[1,2,3,4,5,6,7,8,9,10],
    searchFor: 'both',
    text: '',
    category: '',
  })
}
</script>

<style scoped>

</style>