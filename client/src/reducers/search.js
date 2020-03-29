export const initialState = {
  results: [
    {
      url: 'https://github.com/Scapigliata',
      title: 'Scapigliata',
    },
    {
      url: 'https://github.com/bradtraversy',
      title: 'Brad Traversy',
    },
  ],
  saved: [],
  search: {
    query: '',
    language: 'JavaScript',
    label: 'bug',
  },
};

export const types = {
  SET_RESULTS: 'SET_RESULTS',
  SET_SAVED: 'SET_SAVED',
  UPDATE_INPUT: 'UPDATE_INPUT',
  RESET_SEARCH: 'RESET_SEARCH',
};

const searchReducer = (state, { type, payload }) => {
  switch (type) {
    case types.SET_RESULTS:
      return {
        ...state,
        results: payload,
      };
    case types.SET_SAVED:
      return {
        ...state,
        saved: payload,
      };
    case types.UPDATE_INPUT: {
      const { name, value } = payload;
      return {
        ...state,
        search: {
          ...state.search,
          [name]: value,
        },
      };
    }
    case types.RESET_SEARCH:
      return {
        ...state,
        search: initialState.search,
      };
    default:
      throw new Error('No case matched');
  }
};

export default searchReducer;
