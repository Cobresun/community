import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mdiVue from 'mdi-vue'
import * as mdijs from '@mdi/js'

createApp(App)
  .use(router)
  .use(store)
  .use(mdiVue, {
    icons: mdijs
  })
  .mount('#app')
