import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getCocktailByName } from '../redux/actions';
import { cocktails as cocktailsSelector } from '../redux/selectors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c3c3c3',
    padding: 10,
    borderRadius: 5,
  },
  text: {},
  input: {
    height: 36,
    minWidth: 200,
    backgroundColor: '#c5c5c5',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CocktailSearch = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector(cocktailsSelector);

  const [cocktail, setCocktail] = useState('');
  const onPress = () => dispatch(getCocktailByName(cocktail));

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setCocktail}
        value={cocktail}
      />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>PRESS ME!</Text>
      </TouchableOpacity>
      {cocktails && cocktails.map((c, k) => <Text key={k}>{c.strDrink}</Text>)}
    </SafeAreaView>
  );
};

export default CocktailSearch;
