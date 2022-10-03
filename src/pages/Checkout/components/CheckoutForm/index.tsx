import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  CreditCard,
  Money,
} from 'phosphor-react';
import { useState } from 'react';

import {
  AddressForm,
  CheckoutFormContainer,
  HeaderFormContainer,
  HeaderInfo,
  InputFields,
  Input,
  InputArea,
  PaymentForm,
  PaymentMethodsContainer,
  PaymentMethod,
} from './styles';

export enum PaymentMethodTypes {
  CREDIT_CARD = 'credit-card',
  DEBIT_CARD = 'debit-card',
  MONEY = 'money',
}

export function CheckoutForm() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethodTypes | null>(null);

  function handleSelectPaymentMethod(paymentMethod: PaymentMethodTypes) {
    setSelectedPaymentMethod(paymentMethod);
  }

  return (
    <CheckoutFormContainer>
      <h4>Complete seu pedido</h4>
      <AddressForm>
        <HeaderFormContainer>
          <MapPinLine size={22} color="#C47F17" />
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
      <PaymentForm>
        <HeaderFormContainer>
          <CurrencyDollar color="#8047F8" size={22} />
          <HeaderInfo>
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </HeaderInfo>
        </HeaderFormContainer>

        <PaymentMethodsContainer>
          <PaymentMethod
            type="button"
            onClick={() =>
              handleSelectPaymentMethod(PaymentMethodTypes.CREDIT_CARD)
            }
            selected={selectedPaymentMethod === PaymentMethodTypes.CREDIT_CARD}
          >
            <CreditCard size={16} />
            <p>CARTÃO DE CRÉDITO</p>
          </PaymentMethod>
          <PaymentMethod
            type="button"
            onClick={() =>
              handleSelectPaymentMethod(PaymentMethodTypes.DEBIT_CARD)
            }
            selected={selectedPaymentMethod === PaymentMethodTypes.DEBIT_CARD}
          >
            <Bank size={16} />
            <p>CARTÃO DE DÉBITO</p>
          </PaymentMethod>
          <PaymentMethod
            type="button"
            onClick={() => handleSelectPaymentMethod(PaymentMethodTypes.MONEY)}
            selected={selectedPaymentMethod === PaymentMethodTypes.MONEY}
          >
            <Money size={16} />
            <p>DINHEIRO</p>
          </PaymentMethod>
        </PaymentMethodsContainer>
      </PaymentForm>
    </CheckoutFormContainer>
  );
}
