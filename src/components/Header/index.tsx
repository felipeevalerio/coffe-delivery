import { MapPin } from 'phosphor-react';
import { Link } from 'react-router-dom';

import { HeaderContainer, ActionsHeader, LocationInfo } from './styles';
import logoImg from '../../assets/logo.svg';
import { Cart } from '../Cart';

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src={logoImg}
          alt="Logotipo da Coffe Delivery, representado por um café com o logotipo da Rocketseat na parte mais interna e com um texto ao lado representando o nome do website 'Coffe Delivery'"
        />
      </Link>
      <ActionsHeader>
        <LocationInfo>
          <MapPin weight="fill" size={22} />
          <p>Porto Alegre, RS</p>
        </LocationInfo>
        <Cart />
      </ActionsHeader>
    </HeaderContainer>
  );
}
