import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
  `}
`;

export const Detail = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media screen and (max-width: ${theme.size.minWidth}) {
      display: block;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 2.5rem;
    @media screen and (max-width: ${theme.size.minWidth}) {
      display: block;
    }
  `}
`;

// Cadastro

export const FormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;

  label {
    margin-bottom: 10px;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;

  button + button {
    margin-left: 10px;
  }

  label {
    margin-bottom: 10px;
  }
`;
