import React, { useState, useEffect, createContext, useMemo } from "react";

import { restaurantRequest, restaurantTransform } from "./restaurant.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  return (
    <RestaurantContext.Provider value={{ restaurants: [1, 2, 3] }}>
      {children}
    </RestaurantContext.Provider>
  );
};
