import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { CartContext } from "../../../services/cart/cart.context";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
} from "../components/checkout.styles";

import { CreditCardInput } from "../components/credit-card.component";
import { RestourantInfoCard } from "../../../features/restourants/components/restourant-info-card.component";

import { SafeArea } from "../../../components/utility/safeArea";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>You cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestourantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => (
              <List.Item title={`${item} - ${price / 100}`} />
            ))}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <NameInput label="name" value={name} onChangeText={(t) => setName(t)} />
        {/*NOTE: check the lenght so the app don't crash */}
        <Spacer position="top" size="large">
          {name.length > 0 && <CreditCardInput name={name} />}
        </Spacer>
        <Spacer position="top" size="xxl" />
        <PayButton
          icon="cash-usd"
          mode="contained"
          onPress={() => {
            console.log("pay now");
          }}
        >
          Pay
        </PayButton>
        <Spacer position="top" size="large">
          <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
