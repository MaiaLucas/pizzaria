import styled, { css } from "styled-components";
interface Props {
  outlined: boolean;
  color: "primary" | "secondary";
}

const renderColor = ({ outlined, color }: Props) => {
  if (outlined)
    return css`
      border: 0.5px solid ${color};
      background-color: transparent;
      color: ${color};
      :hover {
        background-color: ${color}21;
      }
    `;

  return css`
    border: 0.5px solid ${color};
    background-color: ${color};
    :hover {
      background-color: ${color}d5;
    }
  `;
};

export const Button = styled.button<Props>`
  ${({ theme, outlined, color }) => css`
    border-radius: 4px;
    padding: 1rem 2rem;
    color: ${theme.color.white};
    font-size: 1rem;
    cursor: pointer;

    ${renderColor({ outlined, color: theme.color[color] })}

    :hover {
      box-shadow: 2px 2px 5px ${theme.color.black}55;
    }
  `}
`;
