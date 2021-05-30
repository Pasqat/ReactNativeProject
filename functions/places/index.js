const { mocks } = require("./mock");
const url = require("url");

// location is a geocode
module.exports.placesRequest = (request, response) => {
  const { location } = url.parse(request.url, true).query;
  response.send(mocks[location]);
};
