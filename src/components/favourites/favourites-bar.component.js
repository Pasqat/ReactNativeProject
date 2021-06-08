import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../../components/restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavouriteBarWrapper = styled(Card)`
  width: 95%;
  align-self: center;
  padding: 10px;
  z-index: 999;
  border-radius: 15px;
`;

export const FavouriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouriteBarWrapper elevation={3}>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourite</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetails", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouriteBarWrapper>
  );
};
