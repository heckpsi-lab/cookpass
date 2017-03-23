import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueI18n from 'vue-i18n';
import 'vue-material/dist/vue-material.css';
import store from './store';
import App from './App';
import router from './router';
import Locale from './data/translations';
import './assets/global.stylus';
import './assets/fonts/fonts.css';

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: store.state.preference.lang,
  fallbackLocale: 'en',
  messages: Locale,
});

Vue.material.registerTheme({
  blue: {
    primary: 'blue',
  },
  teal: {
    primary: 'teal',
  },
  brown: {
    primary: 'brown',
  },
  indigo: {
    primary: 'indigo',
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
});
