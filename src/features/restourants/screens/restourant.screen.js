import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { RestourantInfoCard } from "../components/restourant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safeArea";

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

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

export const RestourantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <LoadingSpinner animating size="large" color={Colors.blue500} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestourantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestourantInfoCard restourant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
