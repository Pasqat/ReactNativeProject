import camelize from "camelize";

export const locationRequest = (searchWord) => {
  const live = "https://us-central1-mealstogo-1cc16.cloudfunctions.net";
  const local = "http://10.0.2.2:5001/mealstogo-1cc16/us-central1";
  const host = process.env.NODE_ENV === "development" ? local : live;

  return fetch(`${host}/geocode?city=${searchWord}`).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const transformedResult = camelize(result);
  const { geometry = {} } = transformedResult.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
