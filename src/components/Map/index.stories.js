import React from 'react';
import { storiesOf } from '@storybook/react';
import Map from './index';
import {
  polylinesTest2, legsColors, legsModes, intermediatesStops,
} from '../../mocks/map';

// =============================================================================
// Stories
// =============================================================================
const stories = storiesOf('Map', module);
stories
  .add('default', () => (
    <Map />
  ))
  .add('w/ polyline', () => (
    <Map
      polylines={polylinesTest2}
      colors={legsColors}
      modes={legsModes}
      intermediatesStops={intermediatesStops}
    />
  ));
