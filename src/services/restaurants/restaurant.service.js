import camelize from "camelize";
import { host } from "../../utils/env";

export const restaurantRequest = (location) => {
  return fetch(`${host}/placesNearby?location=${location}`).then((res) => {
    return res.json();
  });
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isClosedTemporarly: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });

  return camelize(mappedResult);
};
