<template>
    <!-- desktop -->
    <v-app v-if="this.$vuetify.breakpoint.mdAndUp">
      <SidebarNavigation/>
      <v-sheet color="transparent" elevation="0" class="pa-8">
        <h2 class="ma-5">ثبت آگهی</h2>
        <v-card
        class="card-desktop"
        style="margin-bottom: 4em;"
        width="70vw"
        height="80%"
        elevation="4"
        raised
        rounded
        outlined
        >
          <v-card-text>
            <v-form class="px-3" v-model="submitForm">
              <v-row class="pa-3">
                <v-col cols="6"
                class="px-8 col">
                    <v-row class="row">
                        <p>عنوان آگهی</p>
                        <v-text-field
                        label="عنوان آگهی"
                        v-model="name"
                        outlined>
                        </v-text-field>
                    </v-row>

                    <v-row class="row">
                        <p>توضیحات آگهی</p>
                        <v-textarea
                        clearable
                        outlined
                        shaped
                        label="توضیحات آگهی">
                    </v-textarea>
                    </v-row>
                    <!-- save button -->
                    <v-btn
                    class="btn-mobile"
                    elevation="4"
                    large
                    outlined
                    raised
                    text
                    style="background-color: #3751FF;
                    color:white;"
                    @click="submit"
                    >
                        ذخیره تغییرات
                    </v-btn>

                    <!-- clear button -->
                    <v-btn
                    class="btn-mobile"
                    color="#3751FF"
                    elevation="4"
                    outlined
                    large
                    raised
                    @click="clear"
                    >لغو
                    </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-app>

    <!-- responsive -->
    <v-app v-else>
      <SidebarNavigation/>
      <v-sheet class="pa-8" color="transparent" elevation="0">
        <h2 class="mb-5">ثبت آگهی</h2>
        <v-card
            class="card-res"
            width="90vw"
            height="85%"
            elevation="4"
            raised
            rounded
            outlined
        >
          <v-card-text>
            <v-form class="px-3">
              <v-row class="d-flex flex-column">
                <v-col cols="12"
                       class="px-8 col">
                  <v-row class="row">
                    <p>توضیحات آگهی</p>
                    <v-text-field
                        label="عنوان آگهی"
                        v-model="name"
                        outlined>
                    </v-text-field>
                  </v-row>

                  <v-row class="row">
                    <p>توضیحات آگهی</p>
                    <v-textarea
                        clearable
                        outlined
                        shaped
                        label="توضیحات آگهی">
                    </v-textarea>
                  </v-row>

                  <!-- save button -->
                  <v-btn
                      class="btn-mobile"
                      elevation="4"
                      large
                      outlined
                      raised
                      text
                      style="background-color: #3751FF;
                            color:white;"
                      @click="submit"
                  >
                    ذخیره تغییرات
                  </v-btn>

                  <!-- clear button -->
                  <v-btn
                      class="btn-mobile"
                      color="#3751FF"
                      elevation="4"
                      outlined
                      large
                      raised
                      @click="clear"
                  >لغو
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-app>
</template>

<script>
import SidebarNavigation from "./SidebarNavigation.vue";
export default {
    components: { SidebarNavigation },
}
</script>

<style scoped>
    /* .title{
        margin: 2em;
        margin-right: 17em;
    } */
    .col *{
        margin: .5em;
    }
    .btn{
        margin-top: 7em;
    }
    .btn-mobile{
        margin-top: 1em;
    }
    /* .title-res{
        text-align: center;
        margin: 2em;
    } */
    .card-res{
        margin: 1em;
        padding: 1em;
        border: 2px dashed #000080;
    }
    .card-desktop{
        border: 2px dashed #000080;
    }
</style>
