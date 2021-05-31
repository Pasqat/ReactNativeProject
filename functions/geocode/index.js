const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;

  if (mock === "test") {
    const locationMock = locationsMock[city.toLowerCase()];
    return response.json(locationMock);
  }

  client
    .geocode({
      params: {
        address: city,
        api: "your API key",
      },
      timeout: 1000, // after 1s if no response throw error
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((e) => {
      return response.status(400).send(e.response.data.error_message);
    });
};
