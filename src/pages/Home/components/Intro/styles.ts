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

export const ItemsContainer = styled.div`
  margin-top: 3.125rem;
  gap: 1.25rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ITEM_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const;

interface ItemProps {
  color: keyof typeof ITEM_COLORS;
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme['base-button']};
  min-width: 230px;

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
  }

  span {
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme[ITEM_COLORS[props.color]]};
  }
`;
