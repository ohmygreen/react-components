import styled from 'styled-components';

const IconStyled = styled.div.attrs((props) => ({
  className: `rc-icon ${props.className ? props.className : ''}`,
}))`
  svg {
    path {
      fill: ${(props) => (props.pathColor ? props.pathColor : '')};
    }
  }
  cursor: ${(props) => (!!props.onClick ? 'pointer' : 'auto')};
`;

export default IconStyled;
