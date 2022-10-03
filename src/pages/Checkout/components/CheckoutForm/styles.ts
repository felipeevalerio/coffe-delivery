import styled from 'styled-components';

export const CheckoutFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h4 {
    font-size: 1.125rem;
  }
`;

const BaseForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  flex: 1;
  border-radius: 6px;
`;

export const AddressForm = styled(BaseForm)``;

export const PaymentForm = styled(BaseForm)``;

export const HeaderFormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  > p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
  }

  p:last-child {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PaymentMethodsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

interface PaymentMethodProps {
  selected?: boolean;
}

export const PaymentMethod = styled.button<PaymentMethodProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border: 0;
  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  border: 1px solid transparent;

  :hover {
    background: ${(props) => props.theme['base-hover']};
  }

  ${(props) =>
    props.selected &&
    `
    background: ${props.theme['purple-light']};
    border-color: ${props.theme.purple};
    outline: 0;
    box-shadow: none;
  `}

  p {
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const InputArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    width: 100%;
    position: relative;

    ::after {
      content: 'Opcional';
      position: absolute;
      color: ${(props) => props.theme['base-label']};
      font-size: 0.75rem;
      font-style: italic;
      top: 50%;
      transform: translateY(-50%);
      right: 0.75rem;
    }
  }
`;

interface InputProps {
  width?: string;
}

export const Input = styled.input<InputProps>`
  border-radius: 4px;
  width: 100%;
  background: ${(props) => props.theme['base-input']};
  font-size: 0.875rem;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  max-width: ${(props) => props.width};

  ${(props) => !props.width && 'flex: 1;'};

  ::focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`;