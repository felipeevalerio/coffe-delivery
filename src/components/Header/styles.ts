import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

export const ActionsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 8px;
  padding: 0.5rem;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  p {
    font-size: 0.875rem;
  }
`;
