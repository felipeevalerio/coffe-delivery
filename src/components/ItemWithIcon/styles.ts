import styled from 'styled-components';

const ITEM_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const;

export interface ItemProps {
  color: keyof typeof ITEM_COLORS;
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme['base-button']};
  min-width: 230px;

  p,
  strong {
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

export const ChildrenInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
