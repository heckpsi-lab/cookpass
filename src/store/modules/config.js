import * as types from '../types';

const state = {
  config: [],
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
  [types.EDIT_CONFIG]: (vuexState, config) => {
    vuexState.config.splice(config.id, 1, config.data);
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
