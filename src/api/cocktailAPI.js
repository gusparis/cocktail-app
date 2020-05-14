import { get } from './apiHelper';
import URL from './urls';

export const cocktailByName = (name) => get(URL.cocktailByName(name));
