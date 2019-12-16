
// @flow
import React from 'react';
import { Layer, Feature } from 'react-mapbox-gl';

type Props = {
  center?: Array<number>,
  radius?: number,
  fillColor?: string,
  strokeWidth?: string,
  strokeColor?: string,
}

function LayerMarker(props: Props) {
  const {
    center,
    radius,
    fillColor,
    strokeWidth,
    strokeColor,
  } = props;

  if (!center) { return null; }

  return (
    <Layer
      type="circle"
      paint={{
        'circle-radius': radius,
        'circle-color': fillColor,
        'circle-stroke-width': strokeWidth,
        'circle-stroke-color': strokeColor,
        'circle-pitch-scale': 'viewport',
      }}
    >
      <Feature coordinates={center} />
    </Layer>
  );
}

LayerMarker.defaultProps = {
  center: undefined,
  radius: 10,
  fillColor: '#000000',
  strokeWidth: 0,
  strokeColor: '#FFFFFF',
};

export default LayerMarker;
