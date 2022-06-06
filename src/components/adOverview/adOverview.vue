<template>
<v-app>
  <app-bar></app-bar>
  <v-row class="my-10">
    <v-col cols="3" class="mr-5">
      <contact-info></contact-info>
      <v-btn color="blue" rounded class="btn">
        <v-icon>mdi-factory</v-icon>
        <span> مشاهده پروفایل شرکت</span>
      </v-btn>
      <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#ffeb3b" rounded class="btn"
                 v-bind="attrs"
                 v-on="on">
            <v-icon>mdi-note-edit</v-icon>
            <span> ارسال درخواست همکاری</span>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
                color="#002F50"
                dark
            >ارسال درخواست همکاری</v-toolbar>
            <v-card-text>
              <v-form>
                <v-textarea
                    v-model="message"
                    label="پیام"
                    outlined
                    class="mt-5"
                    rows="10">
                </v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                  text
                  @click="dialog.value = false"
              >انصراف</v-btn>
              <v-btn
                  color="#002F50"
                  style="color: white"
                  @click="()=>{submit; dialog.value = false}"
              >ارسال</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
    <v-col cols="8">
      <v-row>
        <title-card></title-card>
      </v-row>
      <v-row>
        <description-card></description-card>
      </v-row>
    </v-col>
  </v-row>
  <homepage-footer />
</v-app>
</template>

<script>

import appBar from "../homepage/AppBar";
import contactInfo from "./contactInfo";
import titleCard from "./titleCard";
import descriptionCard from "./descriptionCard";
import homepageFooter from "../homepage/HomepageFooter";

export default {
  components: {
    appBar,
    contactInfo,
    titleCard,
    descriptionCard,
    homepageFooter
  },
  name: "adOverview"
}
</script>

<style scoped>
.btn{
  width: 100%;
  margin-top: 1rem;
}
</style>