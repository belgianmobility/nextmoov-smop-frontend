// @flow
import React, { useState, useEffect } from 'react';
import mapBoxPolyline from '@mapbox/polyline';
import Sidebar from './containers/Sidebar';
import Map from './components/Map';
import searchTrip from './api/searchTrip';
import getLegInfo from './utils/getLegInfo';
import getGeoLocation from './api/getGeoLocation';

function App() {
  const [fromPlace, setFromPlace] = useState();
  const [toPlace, setToPlace] = useState();
  const [itineraries, setItineraries] = useState([]);
  const [position, setPosition] = useState();
  const [itineraryDetails, setItineraryDetails] = useState({
    polyline: [],
    colors: [],
    modes: [],
    intermediateStops: [],
  });

  function handleResultClick(e) {
    const { id, geo, name } = e;
    if (id === 'from') {
      setFromPlace({
        name,
        geo: `${geo[0].lat},${geo[0].lon}`,
      });
    } if (id === 'to') {
      setToPlace({
        name,
        geo: `${geo[0].lat},${geo[0].lon}`,
      });
    }
  }

  useEffect(() => {
    if (fromPlace !== undefined && toPlace !== undefined) {
      searchTrip(fromPlace.geo, toPlace.geo).then((res) => setItineraries(res.plan.itineraries));
    }
  }, [fromPlace, toPlace]);

  useEffect(() => {
    getGeoLocation()
      .then((res) => setPosition([res.coords.longitude, res.coords.latitude]))
      .catch(() => setPosition());
  }, []);

  useEffect(() => {
    let itineraryColors;
    let itineraryModes;
    const itineraryPolyLine = [];
    const itineraryIntermediateStops = [];
    if (itineraries.length > 0) {
      const legsInfos = getLegInfo(itineraries[0].legs);
      itineraryColors = legsInfos.map((info, index) => legsInfos[index].legColor);
      itineraryModes = legsInfos.map((info, index) => legsInfos[index].legMode);
      itineraries[0].legs.map((leg) => {
        itineraryIntermediateStops.push(leg.intermediateStops);
        return itineraryPolyLine.push(mapBoxPolyline.decode(leg.legGeometry.points));
      });
      setItineraryDetails({
        modes: itineraryModes,
        colors: itineraryColors,
        polyline: itineraryPolyLine,
        intermediateStops: itineraryIntermediateStops,
      });
    }
  }, [itineraries]);

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Sidebar
        onResultClick={handleResultClick}
        itineraries={itineraries}
        from={fromPlace !== undefined ? fromPlace.name : ''}
        to={toPlace !== undefined ? toPlace.name : ''}
        position={position}
      />
      <Map
        polylines={itineraryDetails.polyline}
        colors={itineraryDetails.colors}
        modes={itineraryDetails.modes}
        intermediateStops={itineraryDetails.intermediateStops}
        position={position}
      />
    </div>
  );
}

export default App;
