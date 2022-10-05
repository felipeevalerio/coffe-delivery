import { createContext, ReactNode, useReducer } from 'react';
import { cartReducer, Coffe } from '../reducers/cart/reducer';
import {
  addToCartAction,
  removeFromCartAction,
  minusCoffeQuantityAction,
  plusCoffeQuantityAction,
} from '../reducers/cart/actions';

interface ICartContext {
  cart: Coffe[];
  addToCart: (coffe: Coffe) => void;
  removeFromCart: (name: string) => void;
  plusCoffeQuantity: (coffe: Coffe) => void;
  minusCoffeQuantity: (coffe: Coffe) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  function addToCart(coffe: Coffe) {
    dispatch(addToCartAction(coffe));
  }

  function removeFromCart(name: string) {
    dispatch(removeFromCartAction(name));
  }

  function plusCoffeQuantity(coffe: Coffe) {
    dispatch(plusCoffeQuantityAction(coffe));
  }

  function minusCoffeQuantity(coffe: Coffe) {
    dispatch(minusCoffeQuantityAction(coffe));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        minusCoffeQuantity,
        plusCoffeQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
