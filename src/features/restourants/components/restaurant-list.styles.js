import styled from "styled-components/native";
import { FlatList } from "react-native";

export const RestourantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
