import { createContext, ReactNode, useContext, useState } from 'react';
import { CheckoutFormData } from '../pages/Checkout';
import { CartContext } from './CartContext';

export type Order = CheckoutFormData;

interface IOrderContext {
  order: Order | null;
  completeOrder: (order: Order) => void;
}

export const OrderContext = createContext({} as IOrderContext);

interface OrderProviderProps {
  children: ReactNode;
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [order, setOrder] = useState<Order | null>(null);
  const { clearCart } = useContext(CartContext);

  function completeOrder(order: Order) {
    console.log(order);
    if (order.selectedPaymentMethod) {
      setOrder(order);
      clearCart();
    }
  }

  return (
    <OrderContext.Provider value={{ order, completeOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
