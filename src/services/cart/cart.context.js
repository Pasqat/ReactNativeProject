import React, { createContext, useContext, useState } from "react";

import { AuthenticationContext } from "../authentication/authentication.context";

const CartContext = createContext();

export const CartContextProvider = ({ item, restaurant }) => {
  const { user } = useContext(AuthenticationContext);
};
