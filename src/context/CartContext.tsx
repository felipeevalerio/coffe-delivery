import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { cartReducer, Coffe } from '../reducers/cart/reducer';
import {
  addToCartAction,
  removeFromCartAction,
  minusCoffeQuantityAction,
  plusCoffeQuantityAction,
  clearCartAction,
} from '../reducers/cart/actions';

interface ICartContext {
  cart: Coffe[];
  addToCart: (coffe: Coffe) => void;
  removeFromCart: (name: string) => void;
  plusCoffeQuantity: (coffe: Coffe) => void;
  minusCoffeQuantity: (coffe: Coffe) => void;
  clearCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const cartAsJSON = localStorage.getItem('@coffe-delivery-1.0.0:cart');
    if (cartAsJSON) {
      return JSON.parse(cartAsJSON);
    } else {
      return [];
    }
  });

  useEffect(() => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('@coffe-delivery-1.0.0:cart', cartString);
  }, [cart]);

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

  function clearCart() {
    dispatch(clearCartAction());
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        minusCoffeQuantity,
        plusCoffeQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
