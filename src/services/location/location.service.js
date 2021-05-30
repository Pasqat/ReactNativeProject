import camelize from "camelize";

export const locationRequest = (searchWord) => {
  return fetch(
    `http://10.0.2.2:5001/mealstogo-1cc16/us-central1/geocode?city=${searchWord}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  console.log(result);
  const transformedResult = camelize(result);
  const { geometry = {} } = transformedResult.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
