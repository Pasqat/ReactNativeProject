import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";

import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../../components/restaurant/compact-restaurant-info.component";

const FavouriteBarWrapper = styled.View`
  padding: 10px;
`;

export const FavouriteBar = ({ favourites }) => {
  return (
    <FavouriteBarWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <CompactRestaurantInfo restaurant={restaurant} />
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouriteBarWrapper>
  );
};
