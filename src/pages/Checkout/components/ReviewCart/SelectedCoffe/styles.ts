import styled from 'styled-components';

export const SelectedCoffeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 3rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;

  &:first-child {
    padding-top: 0;
  }

  img {
    width: 64px;
    height: 64px;
  }

  > strong {
    color: ${(props) => props.theme['base-text']};
  }
`;

export const SelectedCoffeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const SelectedCoffeDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`;

export const SelectedCoffeActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  max-height: 32px;
`;
