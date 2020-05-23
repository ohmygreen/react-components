import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import centered from '@storybook/addon-centered/react';

import Card from './Card';

export default {
  title: 'Design System/Atoms/Card',
  decorators: [centered, withKnobs],
};

export const CardComponent = () => (
  <Card rounded={boolean('rounded', false)}>Some text inside the card</Card>
);
export const Rounded = () => (
  <Card className="testing-class" rounded>
    Some text inside the card
  </Card>
);
