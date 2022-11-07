import { CartContainer, CounterProductsInCart } from './styles';
import { ShoppingCart } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export function Cart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const quantityInCart = cart.reduce((total, coffe) => {
    return total + coffe.quantity;
  }, 0);

  function handleRedirectCheckout() {
    navigate('/checkout');
  }

  return (
    <CartContainer onClick={handleRedirectCheckout}>
      {!!cart.length && (
        <CounterProductsInCart>{quantityInCart}</CounterProductsInCart>
      )}
      <ShoppingCart size={22} weight="fill" />
    </CartContainer>
  );
}
