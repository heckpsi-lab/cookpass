import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import preference from './modules/preference';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    preference,
  },
  plugins: [createPersistedState({
    paths: ['preference.lang'],
  })],
});
