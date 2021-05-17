import React from "react";
import { Card } from "react-native-paper";

import { Text, StyleSheet } from "react-native";

export const RestourantInfo = ({ restourant = {} }) => {
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} source={{ uri: photo[0] }} style={styles.cover} />
      <Card.Content>
        <Text>{name}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 15,
    backgroundColor: "#ffffff",
  },
});
