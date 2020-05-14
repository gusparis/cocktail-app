import { all, takeLatest } from 'redux-saga/effects';

import { GET_COCKTAIL_BY_NAME } from '../actions';
import { fetchCocktail } from './cocktails';

function* rootSaga() {
  yield all([yield takeLatest(GET_COCKTAIL_BY_NAME, fetchCocktail)]);
}

export default rootSaga;
