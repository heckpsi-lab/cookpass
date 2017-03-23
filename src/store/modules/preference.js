import * as types from '../types';

const state = {
  lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
};

const mutations = {
  [types.SET_LANG]: (vuexState, lang) => {
    vuexState.lang = lang;
  },
};

export default {
  namespace: 'preference/',
  state,
  mutations,
};
