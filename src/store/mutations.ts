import { Regulation } from '../components/Regulation';

export interface AppState {
  regulations: Partial<Regulation>[];
}

export const state = {
  regulations: [],
};

export const mutations = {
  setRegulations: (state: AppState, regulations: Partial<Regulation>[]) => {
    state.regulations = regulations;
  }
};
