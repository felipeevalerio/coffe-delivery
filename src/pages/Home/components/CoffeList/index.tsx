import { CoffeCard } from './CoffeCard';
import { CoffeListContainer, CoffeShop } from './styles';

import { useState } from 'react';
import { CoffeRepository } from '../../../../repositories/CoffeRepository';

export interface Coffe {
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
}

export function CoffeList() {
  const [coffes, setCoffes] = useState<Coffe[]>(CoffeRepository.getAllCoffes());

  return (
    <CoffeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeShop>
        {coffes.map((coffe) => {
          return (
            <CoffeCard
              key={coffe.name}
              name={coffe.name}
              description={coffe.description}
              price={coffe.price}
              tags={coffe.tags}
              image={coffe.image}
            />
          );
        })}
      </CoffeShop>
    </CoffeListContainer>
  );
}
