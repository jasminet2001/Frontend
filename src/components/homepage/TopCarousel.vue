<template>
  <v-carousel v-if="this.$vuetify.breakpoint.mdAndUp"
  cycle
  hide-delimiter-background
  >
    <v-carousel-item
    >
      <v-card
      color="#000426" class="white--text" rounded
      height="110%"
      >
        <v-row class="d-flex pa-8">
          <v-col cols="7" >
            <v-card-title class="text-wrap ma-4">چگونه میتوانیم فروش موفق در چین داشته باشیم؟</v-card-title>
            <v-card-text class="white--text text-wrap mr-4 text"
            >
              {{ textLimit(loremIpsumString, 500) }}
            </v-card-text>
            <v-card-actions>
              <button class="btn">
                دیدن مقاله
              </button>
            </v-card-actions>
          </v-col>

          <v-col cols="5">
            <v-img
            class="white--text"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            rounded
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-carousel-item>

    <v-carousel-item
    >
      <v-card
      color="#000426" class="white--text" rounded
      height="110%"
      >
        <v-row class="d-flex pa-8">
          <v-col cols="7" >
            <v-card-title class="text-wrap ma-4">چگونه میتوانیم فروش موفق در چین داشته باشیم؟</v-card-title>
            <v-card-text class="white--text text-wrap mr-4 text"
            >
              {{ textLimit(loremIpsumString, 500) }}
            </v-card-text>
            <v-card-actions>
              <button class="btn">
                دیدن مقاله
              </button>
            </v-card-actions>
          </v-col>

          <v-col cols="5">
            <v-img
            class="white--text"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            rounded
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-carousel-item>

    <v-carousel-item
    >
      <v-card
      color="#000426" class="white--text" rounded
      height="110%"
      >
        <v-row class="d-flex pa-8">
          <v-col cols="7">
            <v-card-title class="text-wrap ma-4">چگونه میتوانیم فروش موفق در چین داشته باشیم؟</v-card-title>
            <v-card-text class="white--text text-wrap mr-4 text"
            >
              {{ textLimit(loremIpsumString, 500) }}
            </v-card-text>
            <v-card-actions>
              <button class="btn">
                دیدن مقاله
              </button>
            </v-card-actions>
          </v-col>

          <v-col cols="5">
            <v-img
            class="white--text"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            rounded
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-carousel-item>
  </v-carousel>

  <v-carousel v-else
  cycle
  hide-delimiter-background
  height="700"
  >
    <v-carousel-item >
      <v-card
      color="#000426" class="white--text" rounded
      height="110%"
      >
        <v-row class="pa-8">
          <v-col>
            <v-card-title class=" ma-4">چگونه میتوانیم فروش موفق در چین داشته باشیم؟</v-card-title>
            <v-card-text class="white--text text-wrap mr-4 text"
            >
              {{ textLimit(loremIpsumString, 500) }}
            </v-card-text>
            <v-card-actions>
              <button class="btn-mobile">
                دیدن مقاله
              </button>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-carousel-item>

    <v-carousel-item >
      <v-card
      color="#000426" class="white--text" rounded
      height="110%"
      >
        <v-row class="pa-8">
          <v-col>
            <v-card-title class=" ma-4">چگونه میتوانیم فروش موفق در چین داشته باشیم؟</v-card-title>
            <v-card-text class="white--text text-wrap mr-4 text"
            >
              {{ textLimit(loremIpsumString, 500) }}
            </v-card-text>
            <v-card-actions>
              <button class="btn-mobile">
                دیدن مقاله
              </button>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-carousel-item>

    <v-carousel-item >
      <v-card
      color="#000426" class="white--text" rounded
      height="110%"
      >
        <v-row class="pa-8">
          <v-col>
            <v-card-title class=" ma-4">چگونه میتوانیم فروش موفق در چین داشته باشیم؟</v-card-title>
            <v-card-text class="white--text text-wrap mr-4 text"
            >
              {{ textLimit(loremIpsumString, 500) }}
            </v-card-text>
            <v-card-actions>
              <button class="btn-mobile">
                دیدن مقاله
              </button>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default{
  data(){
    return{
      loremIpsumString: `
        در این مقاله سعی شده روش های نوین یک تجارت موفق در چین را بررسی کنیم.
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
        شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
        الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام
        و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
        دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`
    }
  },
  methods: {
    textLimit(str, lim){
      while (lim < str.length && lim >= 1 && str[lim] !== ' ') {
        lim--
      }
      return str.slice(0, lim) + (lim >= str.length ? '' : '...')
    },
  },
}
</script>

<style scoped>
.text{
  line-height: 2rem;
}

.btn {
  margin: 4%;
  margin-top: 4%;
 --color: #00A97F;
 padding: 0.8em 1.7em;
 background-color: transparent;
 border-radius: 3em;
 position: relative;
 overflow: hidden;
 cursor: pointer;
 transition: .5s;
 font-weight: 400;
 font-size: 17px;
 border: 1px solid;
 font-family: inherit;
 text-transform: uppercase;
 color: var(--color);
 z-index: 1;
}

.btn::before, .btn::after {
 content: '';
 display: block;
 width: 50px;
 height: 50px;
 transform: translate(-50%, -50%);
 position: absolute;
 border-radius: 50%;
 z-index: -1;
 background-color: var(--color);
 transition: 1s ease;
}

.btn::before {
 top: -1em;
 left: -1em;
}

.btn::after {
 left: calc(100% + 1em);
 top: calc(100% + 1em);
}

.btn:hover::before, .btn:hover::after {
 height: 410px;
 width: 410px;
}

.btn:hover {
 color: rgb(10, 25, 30);
}

.btn:active {
 filter: brightness(.8);
}
.btn-mobile{
  margin: 4%;
  margin-top: 1%;
  padding: 0.8em 1.7em;
  background-color: #00A97F;
  border-radius: 3em;
  overflow: hidden;
  font-weight: 400;
  font-size: 17px;
  font-family: inherit;
  color: white;
  z-index: 1;
}
</style>
