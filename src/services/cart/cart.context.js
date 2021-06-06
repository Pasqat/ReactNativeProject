import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  const add = (item, rst) => {
    if (!restaurant || rst.placeId !== restaurant.placeId) {
      setRestaurant(rst);
      setCart([item]);
    }

    setCart([...cart, item]);
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart: add,
        clearCart: clear,
        cart,
        restaurant,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
