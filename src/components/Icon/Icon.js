import React from 'react';

import IconStyled from './Icon.styled';
const Icon = ({ pathColor, children }) => {
  return <IconStyled pathColor={pathColor}>{children}</IconStyled>;
};

export default Icon;
