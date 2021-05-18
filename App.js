import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { theme } from "./src/infrastructure/theme";
import { RestourantScreen } from "./src/features/restourants/screens/restourant.screen";

export default function App() {
  const [OswaldLoaded] = useOswald({ Oswald_400Regular });
  const [LatoLoaded] = useLato({ Lato_400Regular });

  if (!OswaldLoaded || !LatoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestourantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
