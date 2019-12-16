import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoCompleteSearchBox from './index';
import autocomplete from '../../mocks/autocomplete';

// =============================================================================
// Stories
// =============================================================================
const stories = storiesOf('AutoCompleteSearchBox', module);
stories
  .add('default', () => (
    <AutoCompleteSearchBox
      id="from"
      onResultClick={(e) => console.log(e)}
      lang="en"
      results={autocomplete}
    />
  ));
