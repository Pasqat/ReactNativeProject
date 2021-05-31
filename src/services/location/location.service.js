import camelize from "camelize";
import { host, isMock } from "../../utils/env";

export const locationRequest = (searchWord) => {
  return fetch(`${host}/geocode?city=${searchWord}&mock=${isMock}`).then(
    (res) => {
      return res.json();
    }
  );
};

export const locationTransform = (result) => {
  const transformedResult = camelize(result);
  const { geometry = {} } = transformedResult.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
