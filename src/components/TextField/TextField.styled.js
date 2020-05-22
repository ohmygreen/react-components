import styled from 'styled-components';
import { colors } from '../../shared';
const TextFieldStyled = styled.div.attrs({
  className: 'rc-text-field',
})`
  .MuiTextField-root {
    width: 100%;
    .MuiInputBase-input {
      &:read-only {
        background-color: ${colors.grey100};
      }
    }
  }
`;

export default TextFieldStyled;
