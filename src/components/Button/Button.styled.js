import styled from 'styled-components';

const ButtonStyled = styled.div`
  .MuiButtonBase-root {
    text-transform: capitalize;
    padding: 6px 16px;
  }
  .MuiButton-contained {
    &:hover {
      box-shadow: var(--elevation-6);
    }
    &:focus {
      outline: 1px solid var(--blue-100);
    }
    &:active {
      box-shadow: var(--elevation-2);
    }
  }

  .MuiButton-outlinedPrimary {
    &:hover {
      border-color: var(--blue-800);
      background-color: var(--blue-50);
    }
    &:focus {
      border-color: var(--blue-800);
      outline: 1px solid var(--blue-100);
    }
    &:active {
      border-color: var(--blue-800);
      background-color: var(--blue-100);
    }
  }

  .MuiButton-containedSecondary {
    background-color: var(--grey-200);
    color: var(--grey-500);
    &:hover {
      background-color: var(--grey-300);
    }
    &:focus {
      background-color: var(--grey-200);
      outline: 1px solid var(--blue-100);
    }
    &:active {
      background-color: var(--grey-400);
    }
  }

  .MuiButton-outlinedSecondary {
    border-color: var(--grey-500);
    color: var(--grey-500);
    &:hover {
      border-color: transparent;
      background-color: var(--grey-100);
    }
    &:focus {
      border-color: transparent;
      outline: 1px solid var(--blue-100);
    }
    &:active {
      border-color: transparent;
      background-color: var(--grey-200);
    }
  }

  .MuiButton-textPrimary {
    &:hover {
      background-color: var(--blue-50);
    }
    &:focus {
      background-color: transparent;
      outline: 1px solid var(--blue-100) !important;
    }
    &:active {
      background-color: var(--blue-100);
    }
  }

  .MuiButton-textSecondary {
    &:hover {
      background-color: var(--grey-100);
    }
    &:focus {
      background-color: transparent;
      outline: 1px solid var(--blue-100);
    }
    &:active {
      background-color: var(--grey-200);
    }
  }
`;

export default ButtonStyled;
