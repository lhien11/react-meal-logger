import React, { useState } from 'react';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import MealsNavigator from './navigation/MealsNavigator';

import { enableScreens } from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
  console.log("fetch font: ");
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSansRegular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSansBold.ttf"),
  });
};


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  console.log("isLoaded: ", fontLoaded)

  if (!fontLoaded) {
    console.log("is the fond loaded: ");
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.log}
      />
    );
  }
  return <MealsNavigator />;
}
