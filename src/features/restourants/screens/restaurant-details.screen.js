import React from "react";
import { SafeArea } from "../../../components/utility/safeArea";
import { RestourantInfoCard } from "../components/restourant-info-card.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestourantInfoCard restourant={restaurant} />
    </SafeArea>
  );
};
