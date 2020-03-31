import React from 'react';
import { action } from '@storybook/addon-actions';

import SearchInput from './SearchInput';

export default {
  title: 'Design System/Atoms/SearchInput',
};

export const Default = () => <SearchInput onChange={action('onChange called')} />;
