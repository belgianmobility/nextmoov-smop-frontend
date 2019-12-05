import config from '../config';

const { API } = config;
const routes = {
  baseRoute: config.APIRoutes.autocompleteBaseRoute,
  address: config.APIRoutes.autocompleteSubRoutes.address,
  station: config.APIRoutes.autocompleteSubRoutes.station,
};

function autocomplete(route, text, position) {
  return fetch(`${API}${routes.baseRoute}${route}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
      position,
    }),
  }).then((res) => res.json()).catch((err) => console.log(err));
}


export function autocompleteAddress(query, position) {
  return autocomplete(routes.address, query, position);
}

export function autocompleteStation(query, position) {
  return autocomplete(routes.station, query, position);
}
