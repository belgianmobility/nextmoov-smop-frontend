// @flow
import React, { useState, useEffect } from 'react';
import { ZoomControl } from 'react-mapbox-gl';
import MapItem from './MapItem';
import mapConfig from '../../mapConfig';
import { getBounds, findBounds } from '../../utils/mapBounds';

type Props = {
  lang?: string,
  center?: Array<number>,
  polylines?: Array<Array<number>>,
}

const DEFAULT_COORDS = [4.3571273, 50.8452665];
const DEFAULT_DELTA = 0.001;


function Map(props: Props) {
  const {
    lang,
    center,
    polylines,
  } = props;

  const hasPolyLines = polylines !== undefined && polylines.length > 0;

  const [fitbounds, setFitbounds] = useState(
    hasPolyLines ? findBounds(polylines) : getBounds(DEFAULT_COORDS, DEFAULT_DELTA),
  );

  return (
    <MapItem
      fitBounds={fitbounds}
      fitBoundsOptions={{
        padding: {
          top: 40,
          bottom: 40,
          left: 40,
          right: 40,
        },
      }}
      containerStyle={{
        height: '100vh',
        width: '70vw',
        position: 'relative',
      }}
      animationOptions={{
        duration: 0,
        animate: false,
      }}
      style={mapConfig(lang).mapStyle}
    >
      <ZoomControl />
    </MapItem>
  );
}

Map.defaultProps = {
  lang: 'en',
  center: [],
  polylines: undefined,
};

export default Map;
