import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen!</Text>
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

export default MealDetailsScreen;