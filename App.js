import React from "react";
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

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyDqBbjhiJPUY1KF6vfWt0zAoq4pOXpUpFo",
  authDomain: "mealstogopublic-911b1.firebaseapp.com",
  projectId: "mealstogopublic-911b1",
  storageBucket: "mealstogopublic-911b1.appspot.com",
  messagingSenderId: "309220918520",
  appId: "1:309220918520:web:5c973267d6bdd2fe55e70d",
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
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
