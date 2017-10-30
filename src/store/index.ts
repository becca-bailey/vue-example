import Vue from 'vue';
import Vuex from 'vuex';
import { mutations, state } from './mutations';
import createLogger from 'vuex/dist/logger';
import { actions } from './actions';

const debug = true;
// TODO: set this dynamically based on environment

Vue.use(Vuex);

const getters = {
  regulations: state => state.regulations,
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins: debug ? [createLogger({})] : [],
});





