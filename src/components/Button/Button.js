import React from 'react';
import MaterialButton from '@material-ui/core/Button';

const Button = ({ text, ...rest }) => {
  return <MaterialButton {...rest}>{text}</MaterialButton>;
};

export default Button;
