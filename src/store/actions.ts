import axios from 'axios';
import { ActionTypes } from './action-types';

export const actions = {
  getRegulations: ({ commit }) => {
    return axios.get('/regulations')
    .then(response => {
      commit(ActionTypes.SET_REGULATIONS, response.data);
    }).catch(err => {
      console.log(err);
    });
  }
};
