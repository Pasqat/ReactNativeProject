import React, { useContext } from "react";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

import { SafeArea } from "../../../components/utility/safeArea";

import { FavouriteContext } from "../../../services/favourites/favourites.context";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
  margin-top: 0;
`;

export const FavouritesScreen = () => {
  const { favourites } = useContext(FavouriteContext);

  return favourites.lenght ? null : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
