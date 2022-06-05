import styled, { css } from "styled-components";

export const Container = styled.main<{ showSidebar: boolean }>`
  ${({ theme, showSidebar }) => css`
    padding-right: 2rem;
    padding-top: 6rem;
    color: ${theme.color.black};

    padding-left: ${showSidebar ? `300px;` : `2rem;`}

    width: 100%;
    height: 100%;
    @media screen and (max-width: ${theme.size.minWidth}) {
      padding: 25px;
      padding-top: 7rem;
    }
  `}
`;
export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    width: 100%;
  `}
`;
