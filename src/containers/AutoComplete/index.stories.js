import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoComplete from './index';

// =============================================================================
// Stories
// =============================================================================
const stories = storiesOf('AutoComplete', module);
stories
  .add('default', () => (
    <AutoComplete />
  ));
