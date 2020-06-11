import styled from 'styled-components';
import { colors } from '../../shared';
const TextFieldStyled = styled.div.attrs((props) => ({
  className: `rc-text-field ${props.className ? props.className : ''}`,
}))`
  .MuiTextField-root {
    width: 100%;
    .MuiInputBase-input {
      padding: 27px 12px 10px;
    }
    .MuiInputLabel-root {
      transform: translate(12px, 10px) scale(0.75);
    }
    .MuiInputLabel-outlined.MuiInputLabel-shrink {
      transform: translate(14px, -6px) scale(0.75);
    }
    label + .MuiInput-formControl {
      margin-top: 0;
    }
    .MuiFilledInput-root {
      &:read-only {
        background-color: ${colors.grey50};
      }
    }
  }
`;

export default TextFieldStyled;
