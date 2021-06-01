import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

export const CreditCardInput = () => {
  const onChange = (formData) => {
    console.log(formData);
  };
  return <LiteCreditCardInput onChange={onChange} />;
};
