import { AppState, mutations } from './mutations';

describe('mutations', () => {
  it('sets the subscribed regulations', () => {
    const state: AppState = {
      regulations: [],
    };

    const { setRegulations } = mutations;
    const regulations = [
      {
        regulationName: 'Regulation 1'
      }
    ];

    setRegulations(state, regulations);

    expect(state.regulations).toEqual(regulations);
  });
});
