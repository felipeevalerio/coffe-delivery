import styled from 'styled-components';

export const CartContainer = styled.button`
  border-radius: 6px;
  padding: 0.5rem;
  margin: 0 auto;
  border: 0;

  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  cursor: pointer;

  img {
    width: 1.375rem;
    height: 1.375rem;
    fill: ${(props) => props.theme['yellow-dark']};
  }
`;
