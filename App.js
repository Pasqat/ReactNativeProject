import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import firebase from "firebase/app";
import "firebase/auth";

import { theme } from "./src/infrastructure/theme";

import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { FavouriteContextProvider } from "./src/services/favourites/favourites.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDtua7DEZRjsmdsbKj62m4l1J49lPywaGU",
  authDomain: "mealstogo-1cc16.firebaseapp.com",
  projectId: "mealstogo-1cc16",
  storageBucket: "mealstogo-1cc16.appspot.com",
  messagingSenderId: "700605278648",
  appId: "1:700605278648:web:8289f18b3882eecfdac74d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [OswaldLoaded] = useOswald({ Oswald_400Regular });
  const [LatoLoaded] = useLato({ Lato_400Regular });

  if (!OswaldLoaded || !LatoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouriteContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouriteContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
