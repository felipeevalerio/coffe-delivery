import styled from 'styled-components';

interface ButtonContainerProps {
  selected?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  max-height: inherit;
  border: 0;
  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  border: 1px solid transparent;

  :hover {
    background: ${(props) => props.theme['base-hover']};
  }

  ${(props) =>
    props.selected &&
    `
  background: ${props.theme['purple-light']};
  border-color: ${props.theme.purple};
  outline: 0;
  box-shadow: none;
`}

  p {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }
`;
