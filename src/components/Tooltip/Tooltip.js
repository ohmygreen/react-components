import React from 'react';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import TooltipStyled from './Tooltip.styled';

const TooltipTitle = ({ title }) => {
  return <React.Fragment>{title}</React.Fragment>;
};

const Tooltip = ({
  children,
  title,
  placement = 'top',
  arrow = true,
  interactive = true,
  transition,
  ...props
}) => {
  const transitionComponent = !!transition
    ? transition === 'fade'
      ? Fade
      : transition === 'zoom'
      ? Zoom
      : undefined
    : undefined;
  return (
    <TooltipStyled
      title={<TooltipTitle title={title} />}
      placement={placement}
      interactive={interactive}
      arrow={arrow}
      TransitionComponent={transitionComponent}
      {...props}
    >
      <span>{children}</span>
    </TooltipStyled>
  );
};

export default Tooltip;
