import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavouriteToggle, onFavouritToggle }) => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouriteToggle ? "heart" : "heart-outline"}
        onIconPress={onFavouritToggle}
        value={searchKeyword}
        placeholder="Search a location"
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
};
