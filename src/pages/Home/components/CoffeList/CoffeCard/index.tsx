import { ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { Counter } from '../../../../../components/Counter';
import { CartContext } from '../../../../../context/CartContext';
import { Coffe } from '../../../../../reducers/cart/reducer';
import { formatPriceToBRL } from '../../../../../utils/StringUtils';

import {
  AddToCart,
  BuyActions,
  BuyContainer,
  CoffeCardContainer,
  CoffeInfo,
  Tag,
  TagsArea,
} from './styles';

interface CardProps {
  coffe: Coffe;
}

export function CoffeCard({ coffe }: CardProps) {
  const { addToCart } = useContext(CartContext);

  const formattedPrice = formatPriceToBRL(coffe.price);

  return (
    <CoffeCardContainer>
      <img src={coffe.image} alt={coffe.name} />
      <TagsArea>
        {coffe.tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </TagsArea>
      <CoffeInfo>
        <h4>{coffe.name}</h4>
        <p>{coffe.description}</p>
      </CoffeInfo>
      <BuyContainer>
        <h3>{formattedPrice}</h3>
        <BuyActions>
          <Counter coffe={coffe} />
          <AddToCart onClick={() => addToCart(coffe)}>
            <ShoppingCart size={22} weight="fill" />
          </AddToCart>
        </BuyActions>
      </BuyContainer>
    </CoffeCardContainer>
  );
}
