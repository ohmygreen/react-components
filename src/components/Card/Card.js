import React from 'react';
import CardStyled from './Card.styled';

const Card = ({ rounded, children }) => {
  return <CardStyled rounded={rounded}>{children}</CardStyled>;
};

export default Card;
