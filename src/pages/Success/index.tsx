import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';

import checkoutImg from '../../assets/checkout.svg';
import { ItemWithIcon } from '../../components/ItemWithIcon';
import { OrderContext } from '../../context/OrderContext';
import {
  IntroSucess,
  OrderDetails,
  SuccessContainer,
  OrderContainer,
} from './styles';

export function Success() {
  const { order } = useContext(OrderContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!order) {
      navigate('/');
    }
  }, [order, navigate]);

  return (
    order && (
      <SuccessContainer>
        <IntroSucess>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </IntroSucess>
        <OrderContainer>
          <OrderDetails>
            <ItemWithIcon
              color="purple"
              icon={<MapPin size={16} weight="fill" />}
            >
              <p>
                Entrega em{' '}
                <strong>
                  {order.street},{order.number}
                </strong>
              </p>
              <p>
                {order.district} - {order.city}, {order.uf}
              </p>
            </ItemWithIcon>

            <ItemWithIcon
              color="yellow"
              icon={<Timer size={16} weight="fill" />}
            >
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </ItemWithIcon>

            <ItemWithIcon
              color="yellowDark"
              icon={<CurrencyDollar size={16} weight="fill" />}
            >
              <p>Pagamento na entrega</p>
              <strong>{order.selectedPaymentMethod}</strong>
            </ItemWithIcon>
          </OrderDetails>

          <img
            src={checkoutImg}
            alt="Ilustração demonstrando que o pedido foi enviado para entrega."
          />
        </OrderContainer>
      </SuccessContainer>
    )
  );
}
