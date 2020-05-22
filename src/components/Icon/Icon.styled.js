import styled from 'styled-components';

const IconStyled = styled.div.attrs({
  className: 'rc-icon',
})`
  svg {
    path {
      fill: ${(props) => (props.pathColor ? props.pathColor : '')};
    }
  }
  cursor: ${(props) => (!!props.onClick ? 'pointer' : 'auto')};
`;

export default IconStyled;
