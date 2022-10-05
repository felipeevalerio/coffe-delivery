import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export function Button({ children, selected, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props} selected={selected}>
      {children}
    </ButtonContainer>
  );
}
