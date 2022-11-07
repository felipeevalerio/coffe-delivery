import styled from 'styled-components';

export const CartContainer = styled.button`
  border-radius: 6px;
  padding: 0.5rem;
  margin: 0 auto;
  border: 0;

  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  cursor: pointer;
  position: relative;
`;

export const CounterProductsInCart = styled.div`
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 0.75rem;
  position: absolute;
  top: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -0.5rem;
  width: 20px;
  height: 20px;
  padding: 0.125rem 0;
  border-radius: 50%;
`;
