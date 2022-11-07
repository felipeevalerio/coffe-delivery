import { Coffe } from './reducer';

export enum ActionTypes {
  ADD_TO_CART = 'addToCart',
  PLUS_COFFE_QUANTITY = 'plusCoffeQuantity',
  MINUS_COFFE_QUANTITY = 'minusCoffeQuantity',
  REMOVE_FROM_CART = 'removeFromCart',
  CLEAR_CART = 'clearCart',
}

export function addToCartAction(coffe: Coffe) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: coffe,
  };
}

export function removeFromCartAction(name: string) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: name,
  };
}

export function plusCoffeQuantityAction(coffe: Coffe) {
  return {
    type: ActionTypes.PLUS_COFFE_QUANTITY,
    payload: coffe,
  };
}

export function minusCoffeQuantityAction(coffe: Coffe) {
  return {
    type: ActionTypes.MINUS_COFFE_QUANTITY,
    payload: coffe,
  };
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  };
}
