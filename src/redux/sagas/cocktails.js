import { put, call } from 'redux-saga/effects';

import { cocktailByName } from '../../api';
import { getCocktailByNameSuccess, getCocktailByNameFailed } from '../actions';

// generator
export function* fetchCocktail({ name }) {
  const response = yield call(cocktailByName, name);

  if (response.drinks) {
    yield put(getCocktailByNameSuccess(response.drinks));
  } else {
    yield put(getCocktailByNameFailed(response));
  }
}
