import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import preference from './modules/preference';
import config from './modules/config';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    config,
    preference,
  },
  plugins: [createPersistedState()],
});
