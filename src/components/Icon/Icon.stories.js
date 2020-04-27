import React from 'react';
import { action } from '@storybook/addon-actions';
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

export const Colored = () => (
  <Icon pathColor={'red'}>
    <VisibilityIcon />
  </Icon>
);

export const OnClick = () => (
  <Icon onClick={action('clicked!')}>
    <VisibilityIcon />
  </Icon>
);
