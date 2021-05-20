import React from "react";
import { RestourantInfoCard } from "../components/restourant-info-card.component";

export const RestaurantDetailScreen = ({ route }) => {
  if (!route.params.item) {
    return;
  }
  const item = route.params.item;
  return <RestourantInfoCard restourant={item} />;
};
