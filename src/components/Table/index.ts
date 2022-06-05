import styled, { css } from "styled-components";

export const List = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;
  `}
`;

interface List {
  grid: number[];
}

export const ListTitle = styled.div<List>`
  ${({ theme, grid }) => css`
    width: 100%;
    padding: 1rem;
    display: grid;
    grid-template-columns: ${grid.map((value) => `${value}fr `)};
    background: #fff;
    border: 1px solid #2225;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  `}
`;

export const Item = styled.div<List>`
  ${({ theme, grid }) => css`
    width: 100%;
    padding: 1rem;
    display: grid;
    grid-template-columns: ${grid.map((value) => `${value}fr `)};
    background: #fff;
    border: 1px solid #2225;
    :last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  `}
`;

export const SubList = styled.div<{ hidden: boolean }>`
  ${({ theme, hidden }) => css`
    padding: 1rem;
    background: #c5c5c522;

    display: ${hidden ? "none" : "block"};
  `}
`;
