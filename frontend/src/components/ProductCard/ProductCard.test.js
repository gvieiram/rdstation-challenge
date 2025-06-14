import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from './ProductCard';

const mockProduct = {
  id: 1,
  name: 'Produto Teste',
  category: 'Categoria Teste',
  preferences: ['Pref 1', 'Pref 2', 'Pref 3', 'Pref 4'],
  features: ['Feat 1', 'Feat 2', 'Feat 3', 'Feat 4'],
};

describe('ProductCard', () => {
  const setup = () =>
    render(
      <MemoryRouter>{<ProductCard product={mockProduct} />}</MemoryRouter>
    );

  test('should render name, category, preferences and features', () => {
    setup();
    expect(screen.getByText('Produto Teste')).toBeInTheDocument();
    expect(screen.getByText('Categoria Teste')).toBeInTheDocument();
    expect(screen.getByText('Pref 1')).toBeInTheDocument();
    expect(screen.getByText('Feat 1')).toBeInTheDocument();
  });

  test('should show "+N" when there are more than 3 preferences or features', () => {
    setup();
    const plusOnes = screen.getAllByText('+1');
    expect(plusOnes.length).toBe(2);
  });

  test('should render the link to product details', () => {
    setup();
    const link = screen.getByText('Ver detalhes').closest('a');
    expect(link).toHaveAttribute('href', '/products/1');
  });
});
