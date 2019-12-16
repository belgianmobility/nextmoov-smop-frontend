import React from 'react';
import { storiesOf } from '@storybook/react';
import Itinerary from './index';
import itineraries from '../../mocks/itineraries';

console.log(itineraries);

// =============================================================================
// Stories
// =============================================================================
const stories = storiesOf('Itinerary', module);
stories
  .add('default', () => (
    <Itinerary
      {...itineraries[0]}
      from="FLAGEY"
      to="Namur / Namen"
    />
  ));
