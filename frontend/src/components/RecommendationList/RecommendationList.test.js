import React from 'react';
import { render, screen } from '@testing-library/react';
import RecommendationList from './RecommendationList';

describe('RecommendationList Component', () => {
  test('renders empty state message when no recommendations', () => {
    render(<RecommendationList recommendations={[]} />);
    
    expect(screen.getByText('Nenhuma recomendação encontrada.')).toBeInTheDocument();
  });

  test('renders list of recommendations', () => {
    const recommendations = [
      { id: 1, name: 'RD Station CRM' },
      { id: 2, name: 'RD Station Marketing' }
    ];

    render(<RecommendationList recommendations={recommendations} />);
    
    expect(screen.getByText('Lista de Recomendações:')).toBeInTheDocument();
    expect(screen.getByText('RD Station CRM')).toBeInTheDocument();
    expect(screen.getByText('RD Station Marketing')).toBeInTheDocument();
  });

  test('renders single recommendation', () => {
    const recommendations = [
      { id: 1, name: 'RD Station CRM' }
    ];

    render(<RecommendationList recommendations={recommendations} />);
    
    expect(screen.getByText('RD Station CRM')).toBeInTheDocument();
  });

  test('renders recommendations with additional product information', () => {
    const recommendations = [
      { 
        id: 1, 
        name: 'RD Station CRM',
        category: 'Vendas',
        score: 3
      }
    ];

    render(<RecommendationList recommendations={recommendations} />);
    
    expect(screen.getByText('RD Station CRM')).toBeInTheDocument();
  });
}); 