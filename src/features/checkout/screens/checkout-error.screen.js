import React from "react";

import { CartIconContainer, CartIcon } from "../components/checkout.styles";

import { SafeArea } from "../../../components/utility/safeArea";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Spacer position="top" size="large">
          <Text variant="label">{error}</Text>
        </Spacer>
      </CartIconContainer>
    </SafeArea>
  );
};
