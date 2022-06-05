import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  label {
    margin-bottom: 10px;
  }

  .datepicker {
    background-color: white;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 1rem;
    outlined: none;
    width: 100%;
  }
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: white;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 1rem;
    outlined: none;
  `}
`;
export const Textarea = styled.textarea`
  ${({ theme }) => css`
    background-color: white;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 1rem;
    outlined: none;
  `}
`;
