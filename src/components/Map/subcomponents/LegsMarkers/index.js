// @flow
import React from 'react';
import legMarker from '../LegMarker';

const LegsMarkers = (props) => {
  const { polylines, colors } = props;
  const startMarker = polylines.map((item, index) => (
    legMarker(item[0], `#${colors[index]}`, `${item + index}`)
  ));
  const endMarker = polylines.map((item, index) => (
    legMarker(item[item.length - 1], `#${colors[index]}`, `${item + index}`)
  ));
  const markers = polylines.map((item, index) => (
    <React.Fragment key={`${item + index}`}>
      {startMarker}
      {endMarker}
    </React.Fragment>
  ));
  return markers;
};

export default LegsMarkers;
