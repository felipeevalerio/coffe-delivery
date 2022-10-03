import {
  AddressForm,
  CheckoutFormContainer,
  HeaderFormContainer,
  HeaderInfo,
  InputFields,
  Input,
  InputArea,
} from './styles';
import { MapPinLine } from 'phosphor-react';

export function CheckoutForm() {
  return (
    <CheckoutFormContainer>
      <h4>Complete seu pedido</h4>
      <AddressForm>
        <HeaderFormContainer>
          <MapPinLine size={22} />
          <HeaderInfo>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </HeaderInfo>
        </HeaderFormContainer>
        <InputFields>
          <Input required placeholder="CEP" width="200px" />
          <Input required placeholder="Rua" />
          <InputArea>
            <Input required placeholder="Número" width="200px" />
            <span>
              <Input placeholder="Complemento" />
            </span>
          </InputArea>
          <InputArea>
            <Input required placeholder="Bairro" width="200px" />
            <Input required placeholder="Cidade" />
            <Input required placeholder="UF" width="60px" />
          </InputArea>
        </InputFields>
      </AddressForm>
    </CheckoutFormContainer>
  );
}
