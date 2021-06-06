import React, { useContext } from "react";
import { Text } from "react-native";

import { CartContext } from "../../../services/cart/cart.context";

import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safeArea";

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);
  return (
    <SafeArea>
      <Text>{JSON.stringify(cart)}</Text>
      <Text>restaurant: {JSON.stringify(restaurant)}</Text>
      <CreditCardInput />
    </SafeArea>
  );
};
