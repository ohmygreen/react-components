import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';

const TextField = ({ ...rest }) => {
  return <MaterialTextField {...rest} />;
};

export default TextField;
