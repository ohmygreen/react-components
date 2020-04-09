import React from 'react';
import { withActions } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import centered from '@storybook/addon-centered/react';

import Button from './Button';

export default {
  title: 'Design System/Atoms/Button',
  decorators: [centered, withActions('click'), withKnobs],
};

export const ButtonComponent = () => (
  <Button
    text={text('text', 'Default')}
    color={select(
      'color',
      { default: 'default', inherit: 'inherit', primary: 'primary', secondary: 'secondary' },
      'primary'
    )}
    variant={select(
      'variant',
      { contained: 'contained', outlined: 'outlined', text: 'text' },
      'contained'
    )}
    size={select('size', { small: 'small', medium: 'medium', large: 'large' }, 'medium')}
    fullWidth={boolean('fullWidth', false)}
    disableRipple={boolean('disableRipple', false)}
    disableFocusRipple={boolean('disableFocusRipple', false)}
    disableElevation={boolean('disableElevation', true)}
    disabled={boolean('disabled', false)}
  />
);
export const Contained = () => <Button text="Contained" variant="contained" />;
export const TextButton = () => <Button text="Text button" />;
export const Outlined = () => <Button text="Outlined" variant="outlined" />;
export const Small = () => <Button text="Small" variant="contained" size="small" />;
export const Medium = () => <Button text="Medium" variant="contained" size="medium" />;
export const Large = () => <Button text="Large" variant="contained" size="large" />;
