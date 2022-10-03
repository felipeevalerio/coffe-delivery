import { CartContainer } from './styles';
import { ShoppingCart } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

export function Cart() {
  const navigate = useNavigate();

  function handleRedirectCheckout() {
    navigate('/checkout');
  }

  return (
    <CartContainer onClick={handleRedirectCheckout}>
      <ShoppingCart size={22} weight="fill" />
    </CartContainer>
  );
}
