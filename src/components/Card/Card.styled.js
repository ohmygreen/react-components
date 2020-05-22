import styled, { css } from 'styled-components';
import { colors, elevations } from '../../shared';

const CardStyled = styled.div.attrs({
  className: 'rc-card',
})`
  width: 100%;
  height: 100%;
  padding: 24px 40px;
  box-shadow: ${elevations.elevation1};
  color: ${colors.grey800};
  background-color: ${colors.white};
  ${(props) =>
    props.rounded &&
    css`
      border-radius: 4px;
    `}
`;

export default CardStyled;
