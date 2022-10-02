import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react';

import { InfoSection, IntroContainer, ItemsContainer, Item } from './styles';
import introImg from '../../../../assets/intro.svg';

export function Intro() {
  return (
    <IntroContainer>
      <InfoSection>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ItemsContainer>
          <Item color="yellowDark">
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </Item>
          <Item color="gray">
            <span>
              <Package size={16} weight="fill" />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </Item>
          <Item color="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </Item>
          <Item color="purple">
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </Item>
        </ItemsContainer>
      </InfoSection>
      <img
        src={introImg}
        alt="Imagem de introdução da página, representando um café com o logotipo da Coffe Delivery e com grãos de café a sua volta"
      />
    </IntroContainer>
  );
}
