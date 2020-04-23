import React from 'react';
import { withActions } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import centered from '@storybook/addon-centered/react';

import Icon from './Icon';
import { VisibilityIcon } from '../../icons';

export default {
  title: 'Design System/Atoms/Icon',
  decorators: [centered, withKnobs],
};

export const IconComponent = () => (
  <Icon>
    <VisibilityIcon />
  </Icon>
);
