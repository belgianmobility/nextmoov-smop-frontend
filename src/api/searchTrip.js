import config from '../config';

const { API } = config;
const APIRoute = config.APIRoutes.searchTrip;

function searchTrip(fromPlace, toPlace) {
  return fetch(`${API}${APIRoute}fromPlace=${fromPlace}&toPlace=${toPlace}&showIntermediateStops=true&numItineraries=1`)
    .then((res) => res.json()).catch((err) => console.log(err));
}

export default searchTrip;
