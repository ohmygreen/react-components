import styled, { css } from 'styled-components';

const CardStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 40px;
  box-shadow: var(--elevation-1);
  color: var(--grey-800);
  ${(props) =>
    props.rounded &&
    css`
      border-radius: 4px;
    `}
`;

export default CardStyled;
