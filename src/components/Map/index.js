// @flow
import React, { useState, useEffect } from 'react';
import { ZoomControl } from 'react-mapbox-gl';
import MapItem from './MapItem';
import mapConfig from '../../mapConfig';
import { getBounds, findBounds } from '../../utils/mapBounds';
import Polyline from './subcomponents/Polyline';
import LayerMarker from './subcomponents/LayerMarker';

type Props = {
  lang?: string,
  position?: Array<number>,
  polylines?: Array<Array<number>>,
  colors?: Array<string>,
  modes?: Array<string>,
  intermediatesStops?: Array<Array<number>>,
}

const DEFAULT_COORDS = [4.3571273, 50.8452665];
const DEFAULT_DELTA = 0.001;

function Map(props: Props) {
  const {
    lang,
    position,
    polylines,
    colors,
    modes,
    intermediatesStops,
  } = props;

  const [hasPolyLines, setHasPolylines] = useState();
  const [fitbounds, setFitbounds] = useState(
    getBounds(position !== undefined ? position : DEFAULT_COORDS, DEFAULT_DELTA),
  );

  useEffect(() => {
    if (polylines.length > 0) {
      setHasPolylines(true);
    } else {
      setHasPolylines(false);
    }
  }, [polylines, position]);

  useEffect(() => {
    if (hasPolyLines) {
      setFitbounds(findBounds(polylines));
    } else {
      setFitbounds(getBounds(
        position !== undefined
          ? position
          : DEFAULT_COORDS, DEFAULT_DELTA,
      ));
    }
  }, [hasPolyLines, polylines, position]);

  return (
    <MapItem
      fitBounds={fitbounds}
      fitBoundsOptions={mapConfig(lang).fitboundsOptions}
      containerStyle={mapConfig(lang).containerStyle}
      animationOptions={mapConfig(lang).animationOptions}
      style={mapConfig(lang).mapStyle}
    >
      <ZoomControl />
      {polylines.length > 0 && (
        <Polyline
          polylines={polylines}
          colors={colors}
          modes={modes}
          intermediatesStops={intermediatesStops}
        />
      )}
      <LayerMarker
        center={position !== undefined ? position : DEFAULT_COORDS}
        fillColor="#0000FF"
      />
    </MapItem>
  );
}

Map.defaultProps = {
  lang: 'en',
  position: undefined,
  polylines: [],
  colors: [],
  modes: [],
  intermediatesStops: [],
};

export default Map;
