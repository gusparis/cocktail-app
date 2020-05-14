export const GET_COCKTAIL_BY_NAME = 'GET_COCKTAIL_BY_NAME';
export const GET_COCKTAIL_BY_NAME_SUCCESS = 'GET_COCKTAIL_BY_NAME_SUCCESS';
export const GET_COCKTAIL_BY_NAME_FAILED = 'GET_COCKTAIL_BY_NAME_FAILED';

export const getCocktailByName = (name) => ({
  type: GET_COCKTAIL_BY_NAME,
  name,
});

export const getCocktailByNameSuccess = (cocktails) => ({
  type: GET_COCKTAIL_BY_NAME_SUCCESS,
  cocktails,
});

export const getCocktailByNameFailed = (error) => ({
  type: GET_COCKTAIL_BY_NAME_FAILED,
  error,
});
