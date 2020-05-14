import React from 'react';
import { Provider } from 'react-redux';

import store from '../redux/store';

import CocktailSearch from './CocktailSearch';

const App = () => {
  return (
    <Provider store={store}>
      <CocktailSearch />
    </Provider>
  );
};

export default App;
