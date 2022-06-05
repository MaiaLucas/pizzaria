import styled, { css } from "styled-components";

export const Sidebar = styled.div`
  ${({ theme }) => css`
    position: fixed;
    width: 250px;
    height: 100vh;
    background: #fff;

    padding: 6rem 0 2rem;

    border-right: 0.5px solid #2225;
    color: ${theme.color.black};

    @media screen and (max-width: ${theme.size.minWidth}) {
      width: 100%;
    }
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    font-size: 1.25rem;
  `}
`;

export const Pages = styled.div`
  ${({ theme }) => css`
    height: 60px;
    padding: 0 1rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    cursor: pointer;

    &.active {
      font-weight: 700;

      ::after {
        position: absolute;
        content: "";
        width: 10px;
        background: ${theme.color.tertiary};
        height: 60px;
        top: 0;
        left: 0;
      }
    }

    svg {
      font-size: 1.5rem;
      margin-right: 10px;
    }

    &:hover {
      background: #2223;
    }
  `}
`;
