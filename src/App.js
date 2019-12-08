// @flow
import React, { useState, useEffect } from 'react';
import Sidebar from './containers/Sidebar';
import searchTrip from './api/searchTrip';

function App() {
  const [fromPlace, setFromPlace] = useState();
  const [toPlace, setToPlace] = useState();
  const [itineraries, setItineraries] = useState();

  function handleResultClick(e) {
    const { id, geo } = e;
    if (id === 'from') {
      setFromPlace(`${geo[0].lat},${geo[0].lon}`);
    } if (id === 'to') {
      setToPlace(`${geo[0].lat},${geo[0].lon}`);
    }
  }

  useEffect(() => {
    if (fromPlace !== undefined && toPlace !== undefined) {
      searchTrip(fromPlace, toPlace).then((res) => setItineraries(res.plan.itineraries));
    }
  }, [fromPlace, toPlace]);

  console.log(itineraries);


  return (
    <div className="App">
      <Sidebar
        onResultClick={handleResultClick}
      />
    </div>
  );
}

export default App;
