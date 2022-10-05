import { Trash } from 'phosphor-react';

import { formatPriceToBRL } from '../../../../../utils/StringUtils';
import { Button } from '../../../../../components/Button';
import { Counter } from '../../../../../components/Counter';
import {
  SelectedCoffeActions,
  SelectedCoffeDetails,
  SelectedCoffeInfo,
  SelectedCoffeContainer,
} from './styles';
import { CartContext } from '../../../../../context/CartContext';
import { useContext } from 'react';
import { Coffe } from '../../../../../reducers/cart/reducer';

interface SelectedCoffeProps {
  coffe: Coffe;
}

export function SelectedCoffe({ coffe }: SelectedCoffeProps) {
  const { removeFromCart } = useContext(CartContext);

  const formattedPrice = formatPriceToBRL(coffe.price);

  function handleRemoveProduct() {
    removeFromCart(coffe.name);
  }

  return (
    <SelectedCoffeContainer>
      <SelectedCoffeInfo>
        <img src={coffe.image} alt={coffe.name} />
        <SelectedCoffeDetails>
          <p>{coffe.name}</p>
          <SelectedCoffeActions>
            <Counter coffe={coffe} />
            <Button type="button" onClick={handleRemoveProduct}>
              <Trash size={16} />
              <p>remover</p>
            </Button>
          </SelectedCoffeActions>
        </SelectedCoffeDetails>
      </SelectedCoffeInfo>
      <strong>{formattedPrice}</strong>
    </SelectedCoffeContainer>
  );
}
