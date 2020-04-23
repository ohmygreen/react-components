import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';

import TextFieldStyled from './TextField.styled';

const TextField = ({ ...rest }) => {
  return (
    <TextFieldStyled>
      <MaterialTextField {...rest} />
    </TextFieldStyled>
  );
};

export default TextField;
