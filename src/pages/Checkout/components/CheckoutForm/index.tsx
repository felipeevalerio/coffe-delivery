import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  CreditCard,
  Money,
} from 'phosphor-react';

import {
  CheckoutFormContainer,
  HeaderFormContainer,
  HeaderInfo,
  InputFields,
  Input,
  InputArea,
  PaymentMethodsContainer,
  BaseForm,
} from './styles';

import { Button } from '../../../../components/Button';
import { useFormContext } from 'react-hook-form';
import { PaymentMethodTypes } from '../..';

interface CheckoutFormProps {
  selectedPaymentMethod: PaymentMethodTypes | null;
  handleSelectPaymentMethod: (paymentMethod: PaymentMethodTypes) => void;
}

export function CheckoutForm({
  selectedPaymentMethod,
  handleSelectPaymentMethod,
}: CheckoutFormProps) {
  const { register, watch } = useFormContext();

  const cep = watch('cep');
  const formattedCEP = cep
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');

  return (
    <CheckoutFormContainer>
      <h4>Complete seu pedido</h4>
      <BaseForm>
        <HeaderFormContainer>
          <MapPinLine size={22} color="#C47F17" />
          <HeaderInfo>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </HeaderInfo>
        </HeaderFormContainer>
        <InputFields>
          <Input
            required
            placeholder="CEP"
            width="200px"
            type="text"
            id="cep"
            value={formattedCEP}
            {...register('cep')}
          />
          <Input
            required
            placeholder="Rua"
            type="text"
            id="street"
            {...register('street')}
          />
          <InputArea>
            <Input
              required
              placeholder="Número"
              width="200px"
              type="number"
              id="number"
              min={0}
              {...register('number', { valueAsNumber: true })}
            />
            <span>
              <Input
                placeholder="Complemento"
                type="text"
                id="addressDetails"
                {...register('addressDetails')}
              />
            </span>
          </InputArea>
          <InputArea>
            <Input
              required
              placeholder="Bairro"
              width="200px"
              type="text"
              id="district"
              {...register('district')}
            />
            <Input
              required
              placeholder="Cidade"
              type="text"
              id="city"
              {...register('city')}
            />
            <Input
              required
              placeholder="UF"
              width="60px"
              type="text"
              id="uf"
              {...register('uf')}
            />
          </InputArea>
        </InputFields>
      </BaseForm>
      <BaseForm>
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
          <Button
            type="button"
            onClick={() =>
              handleSelectPaymentMethod(PaymentMethodTypes.CREDIT_CARD)
            }
            selected={selectedPaymentMethod === PaymentMethodTypes.CREDIT_CARD}
          >
            <CreditCard size={16} />
            <p>CARTÃO DE CRÉDITO</p>
          </Button>
          <Button
            type="button"
            onClick={() =>
              handleSelectPaymentMethod(PaymentMethodTypes.DEBIT_CARD)
            }
            selected={selectedPaymentMethod === PaymentMethodTypes.DEBIT_CARD}
          >
            <Bank size={16} />
            <p>CARTÃO DE DÉBITO</p>
          </Button>
          <Button
            type="button"
            selected={selectedPaymentMethod === PaymentMethodTypes.MONEY}
            onClick={() => handleSelectPaymentMethod(PaymentMethodTypes.MONEY)}
          >
            <Money size={16} />
            <p>DINHEIRO</p>
          </Button>
        </PaymentMethodsContainer>
      </BaseForm>
    </CheckoutFormContainer>
  );
}
function watch(arg0: string) {
  throw new Error('Function not implemented.');
}
