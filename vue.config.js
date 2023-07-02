const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       data: `@import "~@/../src/styles/color.scss";`
  //     }
  //   }
  // },
})
