import { InfoSection, IntroContainer } from './styles';
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
      </InfoSection>
      <img src={introImg} alt="Intro" />
    </IntroContainer>
  );
}
