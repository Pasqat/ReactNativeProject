import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestourantScreen } from "../../features/restourants/screens/restourant.screen";
import { Text } from "react-native";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen name="Restaurant" component={RestourantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={() => <Text>Restaurant Detalis</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
