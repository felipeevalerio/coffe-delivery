import { useState } from 'react';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';

import {
  AddToCart,
  BuyActions,
  BuyContainer,
  CoffeCardContainer,
  CoffeInfo,
  Counter,
  Tag,
  TagsArea,
} from './styles';

interface CardProps {
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
}

export function CoffeCard({
  name,
  image,
  description,
  price,
  tags,
}: CardProps) {
  const [counter, setCounter] = useState(0);

  function handlePlusCounter() {
    setCounter((state) => state + 1);
  }

  function handleMinusCounter() {
    counter > 0 && setCounter((state) => state - 1);
  }

  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return (
    <CoffeCardContainer>
      <img src={image} alt={name} />
      <TagsArea>
        {tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </TagsArea>
      <CoffeInfo>
        <h4>{name}</h4>
        <p>{description}</p>
      </CoffeInfo>
      <BuyContainer>
        <h3>{formattedPrice}</h3>
        <BuyActions>
          <Counter>
            <button type="button" onClick={handleMinusCounter}>
              <Minus weight="bold" size={14} />
            </button>
            <p>{counter}</p>
            <button type="button" onClick={handlePlusCounter}>
              <Plus weight="bold" size={14} />
            </button>
          </Counter>
          <AddToCart>
            <ShoppingCart size={22} weight="fill" />
          </AddToCart>
        </BuyActions>
      </BuyContainer>
    </CoffeCardContainer>
  );
}
