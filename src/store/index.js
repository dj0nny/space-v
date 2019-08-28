import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import types from './types';

const BASE_URL = 'https://api.spacexdata.com/v3';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    history: [],
    currentHistoryItem: [],
    launches: [],
    currentLaunch: [],
    isLoading: false,
  },

  mutations: {
    [types.IS_LOADING](state, loadingState) {
      state.isLoading = loadingState;
    },
    [types.SET_HISTORY_FEED](state, feed) {
      state.history = feed;
    },
    [types.SET_HISTORY_DETAIL](state, detail) {
      state.currentHistoryItem = detail;
    },
    [types.SET_LAUNCHES](state, launchesList) {
      state.launches = launchesList;
    },
    [types.SET_LAUNCH_DETAIL](state, detail) {
      state.currentLaunch = detail;
    },
  },

  actions: {
    async [types.FETCH_HISTORY_FEED]({ commit }) {
      commit(types.IS_LOADING, true);
      const res = await axios.get(`${BASE_URL}/history`);
      commit(types.SET_HISTORY_FEED, res.data);
      commit(types.IS_LOADING, false);
    },
    async [types.FETCH_HISTORY_DETAIL]({ commit }, itemId) {
      commit(types.IS_LOADING, true);
      commit(types.SET_HISTORY_DETAIL, []);
      const res = await axios.get(`${BASE_URL}/history/${itemId}`);
      commit(types.SET_HISTORY_DETAIL, res.data);
      commit(types.IS_LOADING, false);
    },
    async [types.FETCH_LAUNCHES]({ commit }) {
      commit(types.IS_LOADING, true);
      const res = await axios.get(`${BASE_URL}/launches`);
      commit(types.SET_LAUNCHES, res.data);
      commit(types.IS_LOADING, false);
    },
    async [types.FETCH_LAUNCH_DETAIL]({ commit }, launchId) {
      commit(types.IS_LOADING, true);
      const res = await axios.get(`${BASE_URL}/launches/${launchId}`);
      commit(types.SET_LAUNCH_DETAIL, res.data);
      commit(types.IS_LOADING, false);
    },
  },
});
