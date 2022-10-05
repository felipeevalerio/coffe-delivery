import { Minus, Plus } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Coffe } from '../../reducers/cart/reducer';
import { CounterContainer } from './styles';

interface CounterProps {
  coffe: Coffe;
}

export function Counter({ coffe }: CounterProps) {
  const { plusCoffeQuantity, minusCoffeQuantity, cart } =
    useContext(CartContext);

  const coffeQuantity =
    cart.find((cof) => cof.name === coffe.name)?.quantity ?? 0;

  return (
    <CounterContainer>
      <button type="button" onClick={() => minusCoffeQuantity(coffe)}>
        <Minus weight="bold" size={14} />
      </button>
      <p>{coffeQuantity}</p>
      <button type="button" onClick={() => plusCoffeQuantity(coffe)}>
        <Plus weight="bold" size={14} />
      </button>
    </CounterContainer>
  );
}
