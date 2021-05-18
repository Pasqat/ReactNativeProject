import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

import { SvgXml } from "react-native-svg";
import Star from "../../../../assets/star";

const RestourantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestourantCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
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
      <Info>
        <Title>{name}</Title>
        <SvgXml xml={Star} width={20} height={20} />
        <Address>{address}</Address>
      </Info>
    </RestourantCard>
  );
};
