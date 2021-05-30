const { mocks, addMockImage } = require("./mock");
const url = require("url");

// location is a geocode
module.exports.placesRequest = (request, response) => {
  const { location } = url.parse(request.url, true).query;
  const data = mocks[location];
  data.results = data.results.map(addMockImage);

  response.json(data);
};
