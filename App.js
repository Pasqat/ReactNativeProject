import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestourantScreen } from "./src/features/restourants/screens/restourant.screen";

export default function App() {
  return (
    <>
      <RestourantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
