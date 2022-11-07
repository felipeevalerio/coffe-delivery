import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react';

import { InfoSection, IntroContainer, ItemsContainer } from './styles';
import introImg from '../../../../assets/intro.svg';
import { ItemWithIcon } from '../../../../components/ItemWithIcon';

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
          <ItemWithIcon
            color="yellowDark"
            icon={<ShoppingCart size={16} weight="fill" />}
          >
            <p>Compra simples e segura</p>
          </ItemWithIcon>
          <ItemWithIcon color="gray" icon={<Package size={16} weight="fill" />}>
            <p>Embalagem mantém o café intacto</p>
          </ItemWithIcon>
          <ItemWithIcon color="yellow" icon={<Timer size={16} weight="fill" />}>
            <p>Entrega rápida e rastreada</p>
          </ItemWithIcon>
          <ItemWithIcon
            color="purple"
            icon={<Coffee size={16} weight="fill" />}
          >
            <p>O café chega fresquinho até você</p>
          </ItemWithIcon>
        </ItemsContainer>
      </InfoSection>
      <img
        src={introImg}
        alt="Imagem de introdução da página, representando um café com o logotipo da Coffe Delivery e com grãos de café a sua volta"
      />
    </IntroContainer>
  );
}
