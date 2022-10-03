import { CheckoutForm } from './components/CheckoutForm';
import { CheckoutContainer, ReviewCart } from './styles';

export function Checkout() {
  function handleCheckoutOrder() {}

  return (
    <CheckoutContainer onSubmit={handleCheckoutOrder}>
      <CheckoutForm />
      <ReviewCart></ReviewCart>
    </CheckoutContainer>
  );
}
