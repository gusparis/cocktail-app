const cocktailByName = (name) =>
  `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

const ingredientByName = (name) =>
  `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`;

export default { cocktailByName, ingredientByName };
