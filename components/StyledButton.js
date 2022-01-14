import styled from "@emotion/styled";

export const StyledButton = styled.button`
  background: transparent;
  border: 1px solid ${({ textColor }) => textColor};
  color: ${({ textColor }) => textColor};
  width: fit-content;
  margin: 1.5rem auto;
  padding: 0.8rem 2rem;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background: ${({ hoverBackground }) => hoverBackground};
    border: 1px solid ${({ hoverBackground }) => hoverBackground};
    color: white;
  }
`;