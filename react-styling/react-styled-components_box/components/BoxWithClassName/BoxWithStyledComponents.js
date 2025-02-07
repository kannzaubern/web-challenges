import styled, { css } from "styled-components";

export const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  &:hover {
    background-color: red;
  }

  ${({ $isBlack }) =>
    $isBlack &&
    css`
      background-color: black;
    `}
`;
