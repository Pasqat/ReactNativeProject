import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";

import MapView from "react-native-maps";
import { Search } from "../components/search.component";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const RestaurantMap = ({ navigation }) => {
  const { restaurants = [] } = useContext(RestaurantContext);
  const { location } = useContext(LocationContext);
  const [latDelta, setLatDelta] = useState(0);

  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02, // <- Default value
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetails", { restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);

  if (!location) {
    return (
      <Map
        region={{
          latitude: 0,
          longitude: 0,
        }}
      />
    );
  }
  return <RestaurantMap navigation={navigation} />;
};
