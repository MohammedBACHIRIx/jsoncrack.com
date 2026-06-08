import styled from "styled-components";

export const StyledToolElement = styled.button<{ $hide?: boolean; $highlight?: boolean }>`
  display: ${({ $hide }) => ($hide ? "none" : "flex")};
  align-items: center;
  gap: 4px;
  place-content: center;
  font-size: 14px;
  background: ${({ $highlight }) =>
    $highlight ? "linear-gradient(rgba(0, 0, 0, 0.1) 0 0)" : "none"};
  color: ${({ theme }) => theme.INTERACTIVE_NORMAL};
  padding: 6px;
  border-radius: 4px;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) =>
      theme.BACKGROUND_SECONDARY === "#f2f3f5"
        ? "rgba(0, 0, 0, 0.05)"
        : "rgba(255, 255, 255, 0.05)"};
    color: ${({ theme }) => theme.INTERACTIVE_HOVER};
    opacity: 1;
    box-shadow: none;
  }
`;
