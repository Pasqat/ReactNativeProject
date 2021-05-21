import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";

import MapView from "react-native-maps";
import { Search } from "../components/search.component";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { restaurants = [] } = useContext(RestaurantContext);
  const { location } = useContext(LocationContext);
  const [latDelta, setLatDelta] = useState(0);

  const { viewport, lat, lng } = location;
  console.log(viewport.southwest);

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
          return null;
        })}
      </Map>
    </>
  );
};
