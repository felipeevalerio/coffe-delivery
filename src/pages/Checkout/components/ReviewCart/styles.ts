import styled from 'styled-components';

export const ReviewCartContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 448px;

  h4 {
    font-size: 1.125rem;
  }
`;

export const ReviewSection = styled.div`
  padding: 2.5rem;
  border-radius: 6px 44px 44px 6px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  gap: 1.5rem;
`;

export const ConfirmOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }

  p:last-child {
    font-size: 1rem;
  }

  strong {
    font-size: 1.25rem;
  }
`;
