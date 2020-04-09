import React from 'react';
import MaterialButton from '@material-ui/core/Button';
import ButtonStyled from './Button.styled';

const Button = ({ text, color = 'primary', disableElevation = true, ...rest }) => {
  return (
    <ButtonStyled>
      <MaterialButton color={color} disableElevation={disableElevation} {...rest}>
        {text}
      </MaterialButton>
    </ButtonStyled>
  );
};

export default Button;
