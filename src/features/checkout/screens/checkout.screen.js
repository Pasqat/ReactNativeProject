import React from "react";

import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safeArea";

export const CheckoutScreen = () => {
  return (
    <SafeArea>
      <CreditCardInput />
    </SafeArea>
  );
};
