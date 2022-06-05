import styled, { css } from "styled-components";

export const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #dc2f02;

  display: flex;
  align-items: center;
  z-index: 999;
  flex: 1;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: 1.5rem;
    margin: 0;
    justify-self: center;
    text-align: center;

    flex: 1;
  `}
`;

export const Icon = styled.h3`
  ${({ theme }) => css`
    font-size: 1.5rem;
    padding: 1rem;
    margin: 0;
    svg {
      cursor: pointer;
    }
  `}
`;
