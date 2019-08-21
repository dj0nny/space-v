import axios from 'axios';

import types from '../types';

const BASE_URL = 'https://api.spacexdata.com/v3/history';

export default {
  state: {
    history: [],
  },

  mutations: {
    [types.SET_HISTORY_FEED](state, feed) {
      state.history = feed;
    },
  },

  actions: {
    async [types.FETCH_HISTORY_FEED]({ commit }) {
      const res = await axios.get(BASE_URL);
      commit(types.SET_HISTORY_FEED, res.data);
    },
  },
};
