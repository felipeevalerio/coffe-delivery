import styled from 'styled-components';

export const IntroContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3.5rem;
  margin-top: 5.75rem;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', monospace;
    color: ${(props) => props.theme['base-title']};
    font-weight: 800;
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
  }
`;
