import React from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

import DatePickerStyled from './DatePicker.styled';

const DatePicker = ({ className, ...rest }) => {
  return (
    <DatePickerStyled className={className}>
      <ReactDatePicker {...rest} />
    </DatePickerStyled>
  );
};

export default DatePicker;
