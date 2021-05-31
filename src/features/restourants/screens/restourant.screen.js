import React, { useContext, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { RestourantInfoCard } from "../components/restourant-info-card.component";
import { RestourantList } from "../components/restaurant-list.styles";
import { Search } from "../components/search";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safeArea";
import { FadeInView } from "../../../components/animation/fade.animation";

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { FavouriteContext } from "../../../services/favourites/favourites.context";
import { FavouriteBar } from "../../../components/favourites/favourites-bar.component";

const LoadingContainer = styled.View`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 99;
`;

const LoadingSpinner = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestourantScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  const { error: locationError } = useContext(LocationContext);
  const { favourites } = useContext(FavouriteContext);
  const hasError = !!error || !!locationError;

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
      {isToggle && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {hasError && (
        <Spacer size="large" position="left">
          <Text variant="error">Something went wrong retrieving the data</Text>
        </Spacer>
      )}
      {!hasError && (
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
                  <FadeInView>
                    <RestourantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
