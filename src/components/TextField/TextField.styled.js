import styled from 'styled-components';

const TextFieldStyled = styled.div`
  .MuiTextField-root {
    width: 100%;
    .MuiInputBase-input {
      &:read-only {
        background-color: var(--grey-100);
      }
    }
  }
`;

export default TextFieldStyled;
