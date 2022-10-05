import { CoffeCard } from './CoffeCard';
import { CoffeListContainer, CoffeShop } from './styles';

import { useState } from 'react';
import { Coffe } from '../../../../reducers/cart/reducer';
import { CoffeRepository } from '../../../../repositories/CoffeRepository';

export function CoffeList() {
  const [coffes, setCoffes] = useState<Coffe[]>(CoffeRepository.getAllCoffes());

  return (
    <CoffeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeShop>
        {coffes.map((coffe) => {
          return <CoffeCard key={coffe.name} coffe={coffe} />;
        })}
      </CoffeShop>
    </CoffeListContainer>
  );
}
