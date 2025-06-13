import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';
import mockProducts from '../../mocks/mockProducts';

jest.mock('../../hooks/useProducts', () => ({
  __esModule: true,
  default: () => ({
    products: mockProducts,
    preferences: ['preference1', 'preference2'],
    features: ['feature1', 'feature2'],
    loading: false,
    error: null
  })
}));

jest.mock('../../hooks/useForm', () => ({
  __esModule: true,
  default: () => ({
    formData: {
      selectedPreferences: [],
      selectedFeatures: [],
      selectedRecommendationType: 'SingleProduct'
    },
    handleChange: jest.fn()
  })
}));

const mockGetRecommendations = jest.fn();
const mockSetRecommendations = jest.fn();

jest.mock('../../hooks/useRecommendations', () => ({
  __esModule: true,
  default: () => ({
    getRecommendations: mockGetRecommendations,
    setRecommendations: mockSetRecommendations
  })
}));

describe('Form Component', () => {
  const mockOnRecommendationsUpdate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderForm = (mock) => {
    render(<Form onRecommendationsUpdate={mock || mockOnRecommendationsUpdate} />);
  };

  test('should render form with all fields', () => {
    renderForm();
    
    expect(screen.getByText('Preferências:')).toBeInTheDocument();
    expect(screen.getByText('Funcionalidades:')).toBeInTheDocument();
    expect(screen.getByText('Tipo de Recomendação:')).toBeInTheDocument();
    expect(screen.getByText('Obter recomendação')).toBeInTheDocument();
  });

  test('should handle form submission', () => {
    const mockRecommendationsData = [{ id: 1, name: 'Test Product' }];
    mockGetRecommendations.mockReturnValue(mockRecommendationsData);

    renderForm();
    
    const form = screen.getByTestId('recommendation-form');
    fireEvent.submit(form);

    expect(mockSetRecommendations).toHaveBeenCalledWith(mockRecommendationsData);
    expect(mockOnRecommendationsUpdate).toHaveBeenCalledWith(mockRecommendationsData);
  });

  test('should prevent default form submission', () => {
    renderForm();
    
    const form = screen.getByTestId('recommendation-form');
    const submitEvent = fireEvent.submit(form);

    expect(submitEvent).toBe(false);
  });

  test('should handle form submission with empty recommendations', () => {
    mockGetRecommendations.mockReturnValue([]);
    renderForm();
    
    const form = screen.getByTestId('recommendation-form');
    fireEvent.submit(form);

    expect(mockSetRecommendations).toHaveBeenCalledWith([]);
    expect(mockOnRecommendationsUpdate).toHaveBeenCalledWith([]);
  });
}); 