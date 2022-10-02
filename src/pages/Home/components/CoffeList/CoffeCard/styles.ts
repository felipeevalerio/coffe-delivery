import styled from 'styled-components';

export const CoffeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;
  border-radius: 6px 36px 6px 36px;
  max-width: 256px;

  background: ${(props) => props.theme['base-card']};

  > img {
    margin-top: calc(-1.25rem - 1.25rem);
    width: 120px;
    height: 120px;
  }
`;

export const TagsArea = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 0.25rem;
  margin: 0.75rem 0 1rem;
`;

export const Tag = styled.li`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  font-weight: bold;
  text-transform: uppercase;

  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`;

export const CoffeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  margin-bottom: 2rem;

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`;

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h4 {
  }
`;

export const BuyActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;

  gap: 0.25rem;
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

export const AddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border: 0;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
`;
