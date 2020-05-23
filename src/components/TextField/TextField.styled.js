import styled from 'styled-components';
import { colors } from '../../shared';
const TextFieldStyled = styled.div.attrs((props) => ({
  className: `rc-text-field ${props.className ? props.className : ''}`,
}))`
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
