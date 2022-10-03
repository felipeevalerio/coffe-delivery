import { CheckoutForm } from './components/CheckoutForm';
import { ReviewCart } from './components/ReviewCart';
import { CheckoutContainer } from './styles';

export function Checkout() {
  function handleCheckoutOrder() {}

  return (
    <CheckoutContainer onSubmit={handleCheckoutOrder}>
      <CheckoutForm />
      <ReviewCart />
    </CheckoutContainer>
  );
}
