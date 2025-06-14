import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import RecommendationType from './RecommendationType';

describe('RecommendationType component', () => {
  test('should render the type options', () => {
    render(
      <RecommendationType
        selectedType=""
        onRecommendationTypeChange={() => {}}
      />
    );
    expect(screen.getByLabelText('Produto Único')).toBeInTheDocument();
    expect(screen.getByLabelText('Múltiplos Produtos')).toBeInTheDocument();
  });

  test('should check the correct radio according to selectedType', () => {
    render(
      <RecommendationType
        selectedType="SingleProduct"
        onRecommendationTypeChange={() => {}}
      />
    );
    expect(screen.getByLabelText('Produto Único')).toBeChecked();
    expect(screen.getByLabelText('Múltiplos Produtos')).not.toBeChecked();
  });

  test('should call callback when selecting type', () => {
    const onChange = jest.fn();
    render(
      <RecommendationType
        selectedType=""
        onRecommendationTypeChange={onChange}
      />
    );
    fireEvent.click(screen.getByLabelText('Produto Único'));
    expect(onChange).toHaveBeenCalledWith('SingleProduct');
    fireEvent.click(screen.getByLabelText('Múltiplos Produtos'));
    expect(onChange).toHaveBeenCalledWith('MultipleProducts');
  });
});
