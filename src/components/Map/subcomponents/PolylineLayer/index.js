// @flow
import React from 'react';
import { Layer, Feature } from 'react-mapbox-gl';

type Props = {
  polylines: Array<Array>,
  colors: Array<string>,
  modes: Array<string>,
}

function PolylineLayer(props: Props) {
  const {
    polylines,
    colors,
    modes,
  } = props;

  return (
    <>
      {polylines.map((item, index) => {
        const isWalkLeg = modes[index] === 'WALK';
        return (
          <React.Fragment key={`${item + index}`}>
            <Layer
              type="line"
              paint={isWalkLeg ? {
                'line-color': 'hsl(0,0%,100%)',
                'line-width': {
                  base: 1.2,
                  stops: [[14, 6], [20, 14]],
                },
                'line-dasharray': [0, 2],
              } : {
                'line-color': 'hsl(0,0%,100%)',
                'line-width': {
                  base: 1.2,
                  stops: [[14, 6], [20, 14]],
                },
              }}
              layout={{
                'line-cap': 'round',
                'line-join': 'round',
              }}
            >
              <Feature coordinates={item} />
            </Layer>
            <Layer
              type="line"
              paint={isWalkLeg ? {
                'line-color': `#${colors[index]}`,
                'line-width': 5,
                'line-dasharray': [0, 2],
              } : {
                'line-color': `#${colors[index]}`,
                'line-width': 5,
              }}
              layout={{
                'line-cap': 'round',
                'line-join': 'round',
              }}
            >
              <Feature coordinates={item} />
            </Layer>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default PolylineLayer;
