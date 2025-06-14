import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import RecommendationList from './RecommendationList';

describe('RecommendationList Component', () => {
  function renderWithRouter(ui) {
    return render(<MemoryRouter>{ui}</MemoryRouter>);
  }

  test('should render empty state message when no recommendations', () => {
    renderWithRouter(<RecommendationList recommendations={[]} />);

    expect(
      screen.getByText(
        'Nenhuma recomendação encontrada. Preencha o formulário para ver as recomendações.'
      )
    ).toBeInTheDocument();
  });

  test('should render list of recommendations', () => {
    const recommendations = [
      { id: 1, name: 'RD Station CRM', preferences: [], features: [] },
      { id: 2, name: 'RD Station Marketing', preferences: [], features: [] },
    ];

    renderWithRouter(<RecommendationList recommendations={recommendations} />);

    expect(screen.getByText('Recomendações')).toBeInTheDocument();
    expect(screen.getByText('RD Station CRM')).toBeInTheDocument();
    expect(screen.getByText('RD Station Marketing')).toBeInTheDocument();
  });

  test('should render single recommendation', () => {
    const recommendations = [
      { id: 1, name: 'RD Station CRM', preferences: [], features: [] },
    ];

    renderWithRouter(<RecommendationList recommendations={recommendations} />);

    expect(screen.getByText('RD Station CRM')).toBeInTheDocument();
  });

  test('should render recommendations with additional product information', () => {
    const recommendations = [
      {
        id: 1,
        name: 'RD Station CRM',
        category: 'Vendas',
        score: 3,
        preferences: [],
        features: [],
      },
    ];

    renderWithRouter(<RecommendationList recommendations={recommendations} />);

    expect(screen.getByText('RD Station CRM')).toBeInTheDocument();
  });
});
