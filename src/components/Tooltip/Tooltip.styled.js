import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const TooltipStyled = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    boxShadow: theme.shadows[6],
    fontSize: 11,
    padding: '16px 10px',
    maxWidth: 'none',
  },
  arrow: {
    color: theme.palette.common.white,
  },
}))(Tooltip);

export default TooltipStyled;
