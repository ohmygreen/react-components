import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  title: 'Design System/Atoms/Button',
};

export const Default = () => (
  <div style={{ textAlign: 'center' }}>
    <Button text="default" variant="contained" />
  </div>
);
