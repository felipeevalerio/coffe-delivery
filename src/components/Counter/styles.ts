import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;

  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  button {
    display: flex;
    align-items: center;

    color: ${(props) => props.theme.purple};
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: color 0.1s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  p {
    color: ${(props) => props.theme['base-title']};
  }
`;
