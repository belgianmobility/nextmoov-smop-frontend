import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoCompleteResults from './index';
import autocomplete from '../../mocks/autocomplete';

// =============================================================================
// Stories
// =============================================================================
const stories = storiesOf('AutoCompleteResults', module);
stories
  .add('default', () => (
    <AutoCompleteResults
      array={autocomplete.addresses}
      onClick={(e) => console.log(e)}
    />
  ));
