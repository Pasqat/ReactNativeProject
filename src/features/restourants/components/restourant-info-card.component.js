import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

import { StyleSheet } from "react-native";

const RestourantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestourantCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestourantInfoCard = ({ restourant = {} }) => {
  const {
    name = "Some Restourant",
    icon,
    photo = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarly,
  } = restourant;

  return (
    <RestourantCard elevation={5}>
      <RestourantCover key={name} source={{ uri: photo[0] }} />
      <Title>{name}</Title>
    </RestourantCard>
  );
};
