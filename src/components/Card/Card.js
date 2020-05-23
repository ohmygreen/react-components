import React from 'react';
import CardStyled from './Card.styled';

const Card = ({ rounded, children, className }) => {
  return <CardStyled {...{ rounded, className }}>{children}</CardStyled>;
};

export default Card;
