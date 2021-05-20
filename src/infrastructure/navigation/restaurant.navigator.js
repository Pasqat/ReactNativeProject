import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { RestourantScreen } from "../../features/restourants/screens/restourant.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen name="Restaurant" component={RestourantScreen} />
    </RestaurantStack.Navigator>
  );
};
