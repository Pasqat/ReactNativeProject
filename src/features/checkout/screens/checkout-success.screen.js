import React from "react";

import { CartIconContainer, CartIcon } from "../components/checkout.styles";

import { SafeArea } from "../../../components/utility/safeArea";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const CheckoutSuccessScreen = () => {
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <Text>Success!</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
