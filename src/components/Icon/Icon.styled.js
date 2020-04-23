import styled from 'styled-components';

const IconStyled = styled.div`
  svg {
    path {
      fill: ${(props) => (props.pathColor ? props.pathColor : '')};
    }
  }
`;

export default IconStyled;
