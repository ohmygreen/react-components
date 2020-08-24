import React, { useState } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import centered from '@storybook/addon-centered/react';

import DatePicker from './DatePicker';

export default {
  title: 'Design System/Atoms/DatePicker',
  decorators: [centered, withKnobs],
};

export const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  return <DatePicker 
          selected={startDate}
          onChange={setStartDate}
         />
};

export const DatePickerCustomInputComponent = () => {
  const DateInput = ({ value: date, onClick }) => {
        return (
            <span onClick={onClick} className='start-date'>
              {date}
            </span>
        )
  };

  const [startDate, setStartDate] = useState(new Date());

  return <DatePicker 
          selected={startDate}
          onChange={setStartDate}
          customInput={<DateInput />}
        />
};

export const MonthPickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  return <DatePicker 
      selected={startDate}
      onChange={setStartDate}
      showMonthYearPicker={true}
    />
};

export const YearPickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  return <DatePicker 
      selected={startDate}
      onChange={setStartDate}
      showYearPicker={true}
    />
};

export const QuarterPickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  return <DatePicker 
      selected={startDate}
      onChange={setStartDate}
      showQuarterYearPicker={true} 
    />
};
