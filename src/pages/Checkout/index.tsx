import { CheckoutForm } from './components/CheckoutForm';
import { ReviewCart } from './components/ReviewCart';
import { CheckoutContainer } from './styles';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { useContext, useState } from 'react';
import { OrderContext } from '../../context/OrderContext';
import { useNavigate } from 'react-router-dom';

export enum PaymentMethodTypes {
  CREDIT_CARD = 'Cartão de Crédito',
  DEBIT_CARD = 'Cartão de Débito',
  MONEY = 'Dinheiro',
}

const checkoutFormValidationSchema = zod.object({
  cep: zod
    .string()
    .regex(/^[0-9]{5}-[0-9]{3}$/, 'CEP deve possuir o formato 00000-000'),
  street: zod.string().min(1, 'Informe o nome da rua'),
  number: zod.number().min(1, 'Informe o número da residência'),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe o nome da cidade'),
  uf: zod.string().length(2, 'O UF deve possuir 2 caracteres'),
});

export interface CheckoutFormData
  extends zod.infer<typeof checkoutFormValidationSchema> {
  selectedPaymentMethod: PaymentMethodTypes | null;
}

export function Checkout() {
  const { completeOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethodTypes | null>(null);

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      city: '',
      district: '',
      number: undefined,
      street: '',
      uf: '',
      cep: '',
    },
  });

  const { handleSubmit } = checkoutForm;

  function handleCheckoutOrder(data: CheckoutFormData) {
    completeOrder({
      ...data,
      selectedPaymentMethod,
    });

    navigate('/checkout/success');
  }

  function handleSelectPaymentMethod(paymentMethod: PaymentMethodTypes) {
    setSelectedPaymentMethod(paymentMethod);
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCheckoutOrder)}>
      <FormProvider {...checkoutForm}>
        <CheckoutForm
          handleSelectPaymentMethod={handleSelectPaymentMethod}
          selectedPaymentMethod={selectedPaymentMethod}
        />
      </FormProvider>
      <ReviewCart />
    </CheckoutContainer>
  );
}
