import React from 'react';
import LayerMarker from '../LayerMarker';

function legMarker(coords, strokeColor, key) {
  return (
    <LayerMarker
      key={key}
      center={coords}
      radius={7}
      fillColor="#ffffff"
      strokeWidth={3}
      strokeColor={strokeColor}
    />
  );
}

export default legMarker;
