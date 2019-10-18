import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import fr from 'vuetify/es5/locale/fr'
// import colors from 'vuetify/es5/util/colors'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default (ctx) => {
  const vuetify = new Vuetify({
    theme: {
      dark: true,
      options: {
        customProperties: true
      },
      themes: {
        light: {
          primary: '#e8676b',
          secondary: '#424242'
        },
        dark: {
          primary: '#e8676b',
          secondary: '#424242'
        }
        // light: {
        //   primary: '#ee44aa',
        //   secondary: '#424242',
        //   accent: '#82B1FF',
        //   error: '#FF5252',
        //   info: '#2196F3',
        //   success: '#4CAF50',
        //   warning: '#FFC107'
        // }
      }
    },
    lang: {
      locales: { fr },
      current: 'fr'
    },
    icons: {
      iconfont: 'mdi'
    }
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
