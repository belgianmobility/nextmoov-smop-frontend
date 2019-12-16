import React from 'react';
import { storiesOf } from '@storybook/react';
import Sidebar from './index';

// =============================================================================
// Stories
// =============================================================================
const stories = storiesOf('Sidebar', module);
stories
  .add('default', () => (
    <Sidebar />
  ));
