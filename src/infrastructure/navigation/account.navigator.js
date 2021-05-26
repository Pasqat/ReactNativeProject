import React from "react";
import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="main"
      component={() => (
        <View>
          <Text>Account screen</Text>
        </View>
      )}
    />
    <Stack.Screen
      name="login"
      component={() => (
        <View>
          <Text>Login screen</Text>
        </View>
      )}
    />
  </Stack.Navigator>
);
