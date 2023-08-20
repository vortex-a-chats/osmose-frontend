import numeral from 'numeral'
import Vue from 'vue'
import numFormat from 'vue-filter-number-format'
import SortedTablePlugin from 'vue-sorted-table'
import vueTopprogress from 'vue-top-progress'

import App from './app.vue'
import TranslateSlot from './components/translate-slot.vue'
import Translate from './components/translate.vue'
import { i18n, loadLanguageAsync } from './i18n'
import { router } from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)


Vue.use(vueTopprogress)
Vue.use(SortedTablePlugin)
Vue.filter('numFormat', numFormat(numeral))
Vue.component('Translate', Translate)
Vue.component('TranslateSlot', TranslateSlot)

document.addEventListener('DOMContentLoaded', () => {
  router.beforeEach((to, from, next) => {
    const lang = to.params.lang
    loadLanguageAsync(lang).then(() => next())
  })

  new Vue({
    el: '#app',
    router,
    i18n,
    render: (h) => h(App),
  })
})
