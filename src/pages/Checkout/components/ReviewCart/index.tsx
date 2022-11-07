import { useContext } from 'react';
import {
  ConfirmOrderButton,
  ConfirmOrderContainer,
  InfoItem,
  ReviewCartContainer,
  ReviewSection,
} from './styles';
import { SelectedCoffe } from './SelectedCoffe';
import { CartContext } from '../../../../context/CartContext';
import { formatPriceToBRL } from '../../../../utils/StringUtils';

export function ReviewCart() {
  const DELIVERY_TAX = 3.5;

  const { cart } = useContext(CartContext);

  function getTotalAmountOfItemsPrice() {
    return cart.reduce((totalAmount, coffe) => {
      return (totalAmount += coffe.price * coffe.quantity);
    }, 0);
  }

  const formattedTotalAmountOfItemsPrice = formatPriceToBRL(
    getTotalAmountOfItemsPrice(),
  );

  const formattedDeliveryTax = formatPriceToBRL(DELIVERY_TAX);

  function getTotalOrderAmountInBRL() {
    const total = getTotalAmountOfItemsPrice() + DELIVERY_TAX;
    return formatPriceToBRL(total);
  }

  return (
    <ReviewCartContainer>
      <h4>Cafés selecionados</h4>
      <ReviewSection>
        {cart.map((coffe) => {
          return <SelectedCoffe key={coffe.name} coffe={coffe} />;
        })}

        {cart.length ? (
          <ConfirmOrderContainer>
            <InfoItem>
              <p>Total de itens:</p>
              <p>{formattedTotalAmountOfItemsPrice}</p>
            </InfoItem>
            <InfoItem>
              <p>Entrega:</p>
              <p>{formattedDeliveryTax}</p>
            </InfoItem>
            <InfoItem>
              <strong>Total:</strong>
              <strong>{getTotalOrderAmountInBRL()}</strong>
            </InfoItem>
            <ConfirmOrderButton type="submit">
              Confirmar pedido
            </ConfirmOrderButton>
          </ConfirmOrderContainer>
        ) : (
          <p>Ainda não tem nada no seu carrinho!</p>
        )}
      </ReviewSection>
    </ReviewCartContainer>
  );
}
