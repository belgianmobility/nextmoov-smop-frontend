export function getBounds(coordsArr, delta) {
  const lat = coordsArr[0];
  const lon = coordsArr[1];
  return [[lat - delta, lon - delta], [lat + delta, lon + delta]];
}

export const findBounds = (polylines) => {
  const outterMostCardinalCoords = polylines.reduce((acc, polyline) => {
    const res = polyline.reduce((accu, [lng, lat]) => {
      const newAccu = accu;
      if (lat >= newAccu.n) { newAccu.n = lat; }
      if (lat <= newAccu.s) { newAccu.s = lat; }
      if (lng >= newAccu.e) { newAccu.e = lng; }
      if (lng <= newAccu.w) { newAccu.w = lng; }

      return newAccu;
    }, {
      ...acc,
    });

    if (res.n >= acc.n) { acc.n = res.n; }
    if (res.s <= acc.s) { acc.s = res.s; }
    if (res.e >= acc.e) { acc.e = res.e; }
    if (res.w <= acc.w) { acc.w = res.w; }

    return acc;
  }, {
    n: 0, // lat
    e: 0, // lng
    s: Infinity, // lat
    w: Infinity, // lng
  });

  const orderedBounds = [
    [outterMostCardinalCoords.s, outterMostCardinalCoords.w],
    [outterMostCardinalCoords.n, outterMostCardinalCoords.e],
  ];

  // need to be under this form [[Southest,Westest], [Northest,Eastest]]
  return orderedBounds;
};
