import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';

import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <OrderProvider>
            <Router />
          </OrderProvider>
        </CartProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
