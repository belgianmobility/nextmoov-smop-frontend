// @flow
import React from 'react';
import LegsMarkers from '../LegsMarkers';
import PolylineLayer from '../PolylineLayer';
import StopsMarkers from '../StopsMarkers';

type Props = {
  polylines: Array<Array>,
  colors: Array<string>,
  modes: Array<string>,
  intermediatesStops: Array<Array>,
}

function reversePolyline(polyline) {
  return polyline.map((point) => point.slice().reverse());
}

function Polyline(props: Props) {
  const {
    polylines,
    colors,
    modes,
    intermediatesStops,
  } = props;
  const reversedPolylines = polylines.map((polyline) => reversePolyline(polyline));
  return (
    <>
      <PolylineLayer polylines={reversedPolylines} colors={colors} modes={modes} />
      <LegsMarkers polylines={reversedPolylines} colors={colors} />
      <StopsMarkers intermediatesStops={intermediatesStops} colors={colors} />
    </>
  );
}

export default Polyline;
