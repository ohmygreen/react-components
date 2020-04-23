import React from 'react';
import TooltipStyled from './Tooltip.styled';

const TooltipTitle = ({ title }) => {
  return <React.Fragment>{title}</React.Fragment>;
};

const Tooltip = ({ children, title, placement = 'top', ...props }) => {
  return (
    <TooltipStyled
      title={<TooltipTitle title={title} />}
      placement={placement}
      interactive
      open={true}
      arrow
      {...props}
    >
      <span>{children}</span>
    </TooltipStyled>
  );
};

export default Tooltip;
