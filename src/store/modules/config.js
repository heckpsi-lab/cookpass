import * as types from '../types';

const state = {
  config: [
    { software: 'QQ', account: '12345', engine: 'cook', length: 12, strength: 1000 },
    { software: 'QQ', account: '12345', engine: 'cook', length: 12, strength: 1000 },
    { software: 'QQ', account: '12345', engine: 'cook', length: 12, strength: 1000 },
    { software: '微博', account: '12345', engine: 'cook', length: 12, strength: 1000 },
  ],
};

const getters = {
  [types.GET_PROFILES]: (vuexState) => {
    const result = {};
    vuexState.config.forEach((profile, index) => {
      if (result[profile.software] === undefined) {
        result[profile.software] = [];
      }
      result[profile.software].push({
        id: index,
        software: profile.software,
        account: profile.account,
        engine: profile.engine,
        length: profile.length,
        strength: profile.strength,
      });
    });
    return result;
  },
};

const actions = {
};

const mutations = {
  [types.ADD_CONFIG]: (vuexState, config) => {
    vuexState.config.push(config);
  },
  [types.EDIT_CONFIG]: (vuexState, id, config) => {
    vuexState.config[id] = config;
  },
  [types.DELETE_CONFIG]: (vuexState, id) => {
    vuexState.config.splice(id, 1);
  },
  [types.WIPE_CONFIG]: (vuexState) => {
    vuexState.config = [];
  },
};

export default {
  namespace: 'config/',
  state,
  getters,
  actions,
  mutations,
};
