import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { CartContext } from "../../../services/cart/cart.context";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from "../components/checkout.styles";

import { CreditCardInput } from "../components/credit-card.component";
import { RestourantInfoCard } from "../../../features/restourants/components/restourant-info-card.component";
import { payRequest } from "../../../services/checkout/checkout.services";

import { SafeArea } from "../../../components/utility/safeArea";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      console.log("somes error");
      navigation.navigate("CheckoutError", {
        error: "Please  fill in a valid credit card",
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        clearCart();
        setName("");
        navigation.navigate("CheckoutSuccess");
      })
      .catch((err) => {
        setIsLoading(false);
        navigation.navigate("CheckoutError", { error: err });
      });
  };

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
      {isLoading && <PaymentProcessing />}
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
          {name.length > 0 && (
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={(e) =>
                navigation.navigate("CheckoutError", {
                  error: `Something went wrong processing your credit card: ${e}`,
                })
              }
            />
          )}
        </Spacer>
        <Spacer position="top" size="xxl" />
        <PayButton
          disabled={isLoading}
          icon="cash-usd"
          mode="contained"
          onPress={onPay}
        >
          Pay
        </PayButton>
        <Spacer position="top" size="large">
          <ClearButton
            disabled={isLoading}
            icon="cart-off"
            mode="contained"
            onPress={clearCart}
          >
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
