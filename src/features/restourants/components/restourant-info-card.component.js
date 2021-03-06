import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

import {
  RestourantCard,
  RestourantCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Address,
  Icon,
} from "./restourant-info-card.styles";

import Star from "../../../../assets/star";
import Open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";

export const RestourantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restourant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarly = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestourantCard elevation={2}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestourantCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={Star}
                width={20}
                height={20}
              />
            ))}
            <SectionEnd>
              {isClosedTemporarly && (
                <Text variant="error">CLOSED TEMPORARLY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={Open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Rating>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestourantCard>
  );
};
