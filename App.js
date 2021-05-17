import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { RestourantScreen } from "./src/features/restourants/screens/restourant.screen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestourantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
