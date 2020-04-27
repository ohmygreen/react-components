import React from 'react';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';

import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import Tooltip from './Tooltip';

export default {
  title: 'Design System/Atoms/Tooltip',
  decorators: [centered, withKnobs],
};

export const TooltipComponent = () => (
  <Tooltip
    title={text('title', 'Tooltip text')}
    arrow={boolean('arrow', true)}
    disableFocusListener={boolean('disableFocusListener', false)}
    disableHoverListener={boolean('disableHoverListener', false)}
    disableTouchListener={boolean('disableTouchListener', false)}
    enterDelay={number('enterDelay', 100)}
    enterNextDelay={number('enterNextDelay', 0)}
    enterTouchDelay={number('enterTouchDelay', 700)}
    leaveDelay={number('leaveDelay', 100)}
    leaveTouchDelay={number('leaveTouchDelay', 100)}
    id={text('id', 'tooltip-id')}
    interactive={boolean('interactive', true)}
    placement={select(
      'placement',
      {
        top: 'top',
        bottom: 'bottom',
        'bottom-end': 'bottom-end',
        'bottom-start': 'bottom-start',
        'left-end': 'left-end',
        'left-start': 'left-start',
        left: 'left',
        'right-end': 'right-end',
        'right-start': 'right-start',
        right: 'right',
        'top-end': 'top-end',
        'top-start': 'top-start',
      },
      'top'
    )}
    transition={select('transition', { grow: 'grow', zoom: 'zoom', fade: 'fade' }, 'grow')}
  >
    default
  </Tooltip>
);
export const CustomTitle = () => (
  <Tooltip
    title={
      <React.Fragment>
        <Typography color="inherit">Tooltip with HTML</Typography>
        <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
        {"It's very engaging. Right?"}
      </React.Fragment>
    }
  >
    HTML
  </Tooltip>
);
export const NoArrow = () => (
  <Tooltip title="Tooltip text" arrow={false}>
    No arrow
  </Tooltip>
);
export const BottomPosition = () => (
  <Tooltip title="Tooltip text" placement="bottom">
    Bottom
  </Tooltip>
);

export const OnClick = () => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title="Tooltip text"
        >
          <Button onClick={handleTooltipOpen}>Click me</Button>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export const NotInteractive = () => (
  <Tooltip title="Tooltip text" interactive={false}>
    Hover Me!
  </Tooltip>
);

export const TransitionZoom = () => (
  <Tooltip title="Tooltip text" transition="zoom">
    Bottom
  </Tooltip>
);
export const TransitionFade = () => (
  <Tooltip title="Tooltip text" transition="fade">
    Bottom
  </Tooltip>
);
export const WithDelay = () => (
  <Tooltip title="Tooltip text" enterDelay={500} leaveDelay={200}>
    Hover over!
  </Tooltip>
);
