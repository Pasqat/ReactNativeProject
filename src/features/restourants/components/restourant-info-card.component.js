import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

import { SvgXml } from "react-native-svg";
import Star from "../../../../assets/star";
import Open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

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

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestourantInfoCard = ({ restourant = {} }) => {
  const {
    name = "Some Restourant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photo = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarly = true,
  } = restourant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestourantCard elevation={5}>
      <RestourantCover key={name} source={{ uri: photo[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={Star} width={20} height={20} />
            ))}
            <SectionEnd>
              {isClosedTemporarly && (
                <Text variant="label" style={{ color: "red" }}>
                  CLOSED TEMPORARLY
                </Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={Open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Image
                  style={{ width: 16, height: 16 }}
                  source={{ uri: icon }}
                />
              </Spacer>
            </SectionEnd>
          </Rating>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestourantCard>
  );
};
