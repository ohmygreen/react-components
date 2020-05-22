import styled from 'styled-components';
import { elevations, colors } from '../../shared';
const ButtonStyled = styled.div.attrs({
  className: 'rc-button',
})`
  .MuiButtonBase-root {
    text-transform: capitalize;
    padding: 6px 16px;
  }
  .MuiButton-contained {
    &:hover {
      box-shadow: ${elevations.elevation6};
    }
    &:focus {
      outline: 1px solid ${colors.blue100};
    }
    &:active {
      box-shadow: ${elevations.elevation6};
    }
  }

  .MuiButton-outlinedPrimary {
    &:hover {
      border-color: ${colors.blue800};
      background-color: ${colors.blue50};
    }
    &:focus {
      border-color: ${colors.blue800};
      outline: 1px solid ${colors.blue100};
    }
    &:active {
      border-color: ${colors.blue800};
      background-color: ${colors.blue100};
    }
  }

  .MuiButton-containedSecondary {
    background-color: ${colors.grey200};
    color: ${colors.grey500};
    &:hover {
      background-color: ${colors.grey300};
    }
    &:focus {
      background-color: ${colors.grey200};
      outline: 1px solid ${colors.blue100};
    }
    &:active {
      background-color: ${colors.grey400};
    }
  }

  .MuiButton-outlinedSecondary {
    border-color: ${colors.grey500};
    color: ${colors.grey500};
    &:hover {
      border-color: transparent;
      background-color: ${colors.grey100};
    }
    &:focus {
      border-color: transparent;
      outline: 1px solid ${colors.blue100};
    }
    &:active {
      border-color: transparent;
      background-color: ${colors.grey200};
    }
  }

  .MuiButton-textPrimary {
    &:hover {
      background-color: ${colors.blue50};
    }
    &:focus {
      background-color: transparent;
      outline: 1px solid ${colors.blue100} !important;
    }
    &:active {
      background-color: ${colors.blue100};
    }
  }

  .MuiButton-textSecondary {
    &:hover {
      background-color: ${colors.grey100};
    }
    &:focus {
      background-color: transparent;
      outline: 1px solid ${colors.blue100};
    }
    &:active {
      background-color: ${colors.grey200};
    }
  }
`;

export default ButtonStyled;
