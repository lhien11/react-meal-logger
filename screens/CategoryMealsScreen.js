import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
    </View>
  )
};

const styles = StyleSheet.screate({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealScreen;