import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2.5rem;
`;

export const IntroSucess = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 800;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const OrderDetails = styled.div`
  max-width: 526px;
  padding: 2.5rem;

  border: solid 1px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(#fafafa, #fafafa),
    linear-gradient(to right, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: padding-box, border-box;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;

  strong,
  p:last-child {
    text-transform: capitalize;
  }
`;
