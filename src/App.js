// @flow
import React, { useState, useEffect } from 'react';
import Sidebar from './containers/Sidebar';
import searchTrip from './api/searchTrip';

function App() {
  const [fromPlace, setFromPlace] = useState();
  const [toPlace, setToPlace] = useState();
  const [itineraries, setItineraries] = useState();

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

  return (
    <div className="App">
      <Sidebar
        onResultClick={handleResultClick}
        itineraries={itineraries}
        from={fromPlace !== undefined ? fromPlace.name : ''}
        to={toPlace !== undefined ? toPlace.name : ''}
      />
    </div>
  );
}

export default App;
