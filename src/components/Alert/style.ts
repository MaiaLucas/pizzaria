import { darken, lighten } from "@mui/material";
import styled, { css } from "styled-components";

interface AlertProps {
  type: "success" | "error" | "info" | "warning";
}

export const Alert = styled.div<AlertProps>`
  ${({ theme, type }) => css`
    position: absolute;
    right: 10px;

    background: ${theme.color[type]};
    color: ${darken(theme.color[type], 0.9)};
    border: 2px solid ${lighten(theme.color[type], 0.4)};
    padding: 1.25rem 1rem;
    border-radius: 4px;
  `}
`;
