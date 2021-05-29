import { render } from '@testing-library/react';
import App from './App';

describe('Barra Principal de Navegação', () => {
  test('Testa se contem a lista de navegação principal', () => {
    const { getByTestId } = render(<App />)
    const mainNavigation = getByTestId('mainNav');
  });
})
