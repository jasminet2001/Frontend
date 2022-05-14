<template>
  <v-main>
    <v-sheet color="transparent" class="pa-4">
      <v-row justify="center" align="center" align-content="center">
        <v-spacer />
        <v-col cols="6" align="center">
          <strong>
            عنوان آگهی
          </strong>
          <br />
          <v-text-field
            outlined
            color="#3751FF"
            label="عنوان آگهی"
            v-model="adTitle"
            style="width: 100%"
            class="mt-4"></v-text-field>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row justify="center" align="center" align-content="center">
        <v-spacer />
        <v-col cols="6" align="center">
          <strong>
            توضیحات آگهی
          </strong>
          <br />
          <v-text-field
              outlined
              color="#3751FF"
              label="توضیحات آگهی"
              v-model="adDescription"
              height="150px"
              style="width: 100%;"
              class="mt-4"></v-text-field>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row justify="center" align="center" align-content="center">
        <v-spacer />
        <v-col cols="6" align="center">
          <strong>
            وبسایت
          </strong>
          <br />
          <v-text-field
              outlined
              color="#3751FF"
              label="وبسایت"
              v-model="adWebsite"
              style="width: 100%"
              class="mt-4"></v-text-field>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row justify="center" align="center" align-content="center">
        <v-spacer />
        <v-col cols="6" align="center">
          <strong>
            شماره تلفن
          </strong>
          <br />
          <v-text-field
              outlined
              color="#3751FF"
              label="شماره تلفن"
              v-model="adPhoneNum"
              style="width: 100%"
              class="mt-4"></v-text-field>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row justify="center" align="center" align-content="center">
        <v-spacer />
        <v-col cols="6" align="center">
          <strong>
            استان آگهی
          </strong>
          <br />
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="orange"
                  class="rounded-lg mt-4"
                  dark
                  width="100%"
                  v-bind="attrs"
                  v-on="on"
              >
                انتخاب استان
                <v-spacer />
                <v-icon small>{{ ImdiDown }}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                  v-for="(state, index) in states"
                  :key="index"
              >
                <v-list-item-title>{{ state.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row justify="center" align="center" align-content="center">
        <v-spacer />
        <v-col cols="6" align="center">
          <strong>
            شهر آگهی
          </strong>
          <br />
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="orange"
                  class="rounded-lg mt-4"
                  dark
                  width="100%"
                  v-bind="attrs"
                  v-on="on"
              >
                انتخاب شهر
                <v-spacer />
                <v-icon small>{{ ImdiDown }}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                  v-for="(city, index) in cities"
                  :key="index"
              >
                <v-list-item-title>{{ city.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row justify="center" align="center" align-content="center">
        <v-spacer />
        <v-col cols="6" align="center">
          <strong>
            حداکثر قیمت
          </strong>
          <br />
          <v-text-field
              outlined
              color="#3751FF"
              label="حداکثر قیمت"
              v-model="maximumPrice"
              style="width: 100%"
              class="mt-4"></v-text-field>
        </v-col>
        <v-spacer />
      </v-row>
    </v-sheet>
  </v-main>
</template>

<script>
import { mdiChevronDown } from '@mdi/js'
export default {
  data () {
    return {
      ImdiDown: mdiChevronDown,
      adTitle: '',
      adDescription: '',
      adWebsite: '',
      adPhoneNum: '',
      maximumPrice: '',
      states: [
        { title: 'تهران' },
        { title: 'مشهد' },
        { title: 'شیراز' },
        { title: 'اصفهان' },
        { title: 'همدان' },
        { title: 'گیلان' },
        { title: 'آذربایجان شرقی' },
        { title: 'آذربایجان غربی' },
        { title: 'خوزستان' }
      ],
      cities: [
        { title: 'تهران' },
        { title: 'مشهد' },
        { title: 'شیراز' },
        { title: 'اصفهان' },
        { title: 'همدان' },
        { title: 'گیلان' },
        { title: 'اردبیل' },
        { title: 'تبریز' },
        { title: 'اهواز' }
      ]

    }
  }
}
</script>

<style scoped>

</style>
