import {
  GET_COCKTAIL_BY_NAME,
  GET_COCKTAIL_BY_NAME_SUCCESS,
  GET_COCKTAIL_BY_NAME_FAILED,
} from '../actions';

const initialState = {
  cocktails: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COCKTAIL_BY_NAME:
      return { ...state, loading: true };
    case GET_COCKTAIL_BY_NAME_SUCCESS:
      return { ...state, cocktails: action.cocktails, loading: false };
    case GET_COCKTAIL_BY_NAME_FAILED:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};
