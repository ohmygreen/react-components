import React from 'react';

import IconStyled from './Icon.styled';
const Icon = ({ pathColor, onClick, children }) => {
  return (
    <IconStyled onClick={onClick} pathColor={pathColor}>
      {children}
    </IconStyled>
  );
};

export default Icon;
