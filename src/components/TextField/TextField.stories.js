import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import centered from '@storybook/addon-centered/react';

import TextField from './TextField';

export default {
  title: 'Design System/Atoms/TextField',
  decorators: [centered, withKnobs],
};

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
export const TextFieldComponent = () => {
  const isSelect = boolean('select', false);
  return (
    <TextField
      label={text('text', 'Standard')}
      variant={select(
        'variant',
        { standard: 'standard', outlined: 'outlined', filled: 'filled' },
        'outlined'
      )}
      autoComplete={text('autoComplete', 'shipping address')}
      autoFocus={boolean('autoFocus', false)}
      color={select('color', { primary: 'primary', secondary: 'secondary' }, 'primary')}
      defaultValue={text('defaultValue')}
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      fullWidth={boolean('fullWidth', false)}
      helperText={text('helperText', 'Some important text')}
      id={text('id', 'text-field')}
      margin={select('margin', { none: 'none', dense: 'dense', normal: 'normal' })}
      multiline={boolean('multiline', false)}
      name={text('name', 'text-field-name')}
      placeholder={text('placeholder', 'placeholder text')}
      required={boolean('required', true)}
      rows={text('rows')}
      rowsMax={text('rowsMax')}
      select={isSelect}
      size={select('size', { small: 'small', medium: 'medium' })}
      type={text('type', 'text')}
      value={text('value')}
    >
      {isSelect &&
        currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </TextField>
  );
};
export const Standard = () => <TextField label="Standard" />;
export const Filled = () => <TextField label="Filled" variant="filled" />;
export const Outlined = () => <TextField label="Outlined" variant="outlined" />;
export const Required = () => <TextField label="Required" variant="outlined" required />;
export const Disabled = () => <TextField label="Disabled" variant="outlined" disabled />;
export const ReadOnly = () => (
  <TextField
    label="Read only"
    variant="outlined"
    helperText="read only input"
    inputProps={{ readOnly: true }}
    value={"You can't edit me"}
  />
);
export const WithDescription = () => (
  <TextField label="Helper text" variant="outlined" helperText="Some important text" />
);
export const Error = () => <TextField label="Error" variant="outlined" error />;
export const Multiline = () => <TextField label="Multiline" variant="outlined" multiline />;
export const ContainerWidth = () => (
  <div style={{ width: '620px' }}>
    <TextField label="Disabled" variant="outlined" disabled />
  </div>
);
export const Select = () => (
  <TextField
    label="Select"
    variant="outlined"
    select
    helperText="Please select your currency"
    SelectProps={{
      native: true,
    }}
  >
    {currencies.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </TextField>
);

export const ControlledInput = () => {
  const onChangeAction = action('onChange');
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    onChangeAction(event.target.value);
    setValue(event.target.value);
  };

  return <TextField value={value} onChange={handleChange} variant="filled" />;
};

export const UncontrolledInput = () => {
  return <TextField defaultValue={'Start Value'} onChange={action('onChange')} variant="filled" />;
};
