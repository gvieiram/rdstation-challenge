import { renderHook } from '@testing-library/react';
import useRecommendations from './useRecommendations';
import mockProducts from '../mocks/mockProducts';

describe('useRecommendations', () => {
  test('should initialize with empty recommendations', () => {
    const { result } = renderHook(() => useRecommendations(mockProducts));
    expect(result.current.recommendations).toEqual([]);
  });

  test('should get recommendations for SingleProduct type', () => {
    const { result } = renderHook(() => useRecommendations(mockProducts));
    
    const formData = {
      selectedPreferences: ['Integração com chatbots'],
      selectedFeatures: ['Chat ao vivo e mensagens automatizadas'],
      selectedRecommendationType: 'SingleProduct'
    };

    const recommendations = result.current.getRecommendations(formData);
    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  test('should get recommendations for MultipleProducts type', () => {
    const { result } = renderHook(() => useRecommendations(mockProducts));
    
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Personalização de funis de vendas'
      ],
      selectedFeatures: [
        'Criação e gestão de campanhas de e-mail'
      ],
      selectedRecommendationType: 'MultipleProducts'
    };

    const recommendations = result.current.getRecommendations(formData);
    expect(recommendations.length).toBeGreaterThan(1);
    expect(recommendations[0].name).toBe('RD Station CRM');
    expect(recommendations[1].name).toBe('RD Station Marketing');
  });

  test('should return empty array when no matches found', () => {
    const { result } = renderHook(() => useRecommendations(mockProducts));
    
    const formData = {
      selectedPreferences: ['Preferência inexistente'],
      selectedFeatures: ['Funcionalidade inexistente'],
      selectedRecommendationType: 'MultipleProducts'
    };

    const recommendations = result.current.getRecommendations(formData);
    expect(recommendations).toEqual([]);
  });

  test('should handle empty form data', () => {
    const { result } = renderHook(() => useRecommendations(mockProducts));
    
    const formData = {
      selectedPreferences: [],
      selectedFeatures: [],
      selectedRecommendationType: 'MultipleProducts'
    };

    const recommendations = result.current.getRecommendations(formData);
    expect(recommendations).toEqual([]);
  });
}); 