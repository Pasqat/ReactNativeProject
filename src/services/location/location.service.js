import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchWord) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchWord];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const transformedResult = camelize(result);
  const { geometry = {} } = transformedResult[0];
  const { lat, lng } = geometry;

  return { lat, lng };
};
