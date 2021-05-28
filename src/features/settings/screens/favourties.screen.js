import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safeArea";
import { RestourantInfoCard } from "../../restourants/components/restourant-info-card.component";
import { RestourantList } from "../../restourants/components/restaurant-list.styles";

import { FavouriteContext } from "../../../services/favourites/favourites.context";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
  margin-top: 0;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouriteContext);

  return favourites.length ? (
    <RestourantList
      data={favourites}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetails", { restaurant: item })
            }
          >
            <Spacer position="bottom" size="large">
              <RestourantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.name}
    />
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
