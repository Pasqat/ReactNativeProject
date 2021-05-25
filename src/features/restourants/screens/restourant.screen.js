import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { RestourantInfoCard } from "../components/restourant-info-card.component";
import { Search } from "../components/search";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safeArea";

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavouriteContext } from "../../../services/favourites/favourites.context";
import { FavouriteBar } from "../../../components/favourites/favourites-bar.component";

const RestourantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingSpinner = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestourantScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouriteContext);

  const [isToggle, setIsToggle] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <LoadingSpinner animating size="large" color={Colors.blue500} />
        </LoadingContainer>
      )}
      <Search
        isFavouriteToggle={isToggle}
        onFavouritToggle={() => setIsToggle(!isToggle)}
      />
      {isToggle && <FavouriteBar favourites={favourites} />}
      <RestourantList
        data={restaurants}
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
    </SafeArea>
  );
};
