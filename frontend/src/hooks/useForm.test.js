import { renderHook, act } from '@testing-library/react';
import useForm from './useForm';

describe('useForm', () => {
  const initialState = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: ''
  };

  test('should initialize with provided state', () => {
    const { result } = renderHook(() => useForm(initialState));
    expect(result.current.formData).toEqual(initialState);
  });

  test('should update form data when handleChange is called', () => {
    const { result } = renderHook(() => useForm(initialState));

    act(() => {
      result.current.handleChange('selectedPreferences', ['pref1', 'pref2']);
    });

    expect(result.current.formData.selectedPreferences).toEqual(['pref1', 'pref2']);
  });

  test('should maintain other fields when updating a single field', () => {
    const { result } = renderHook(() => useForm(initialState));

    act(() => {
      result.current.handleChange('selectedPreferences', ['pref1']);
    });

    expect(result.current.formData).toEqual({
      ...initialState,
      selectedPreferences: ['pref1']
    });
  });

  test('should handle multiple field updates', () => {
    const { result } = renderHook(() => useForm(initialState));

    const changeField = (field, value) => {
      act(() => {
        result.current.handleChange(field, value);
      });
    };

    changeField('selectedPreferences', ['pref1']);
    changeField('selectedFeatures', ['feature1']);
    changeField('selectedRecommendationType', 'SingleProduct');

    expect(result.current.formData).toEqual({
      selectedPreferences: ['pref1'],
      selectedFeatures: ['feature1'],
      selectedRecommendationType: 'SingleProduct'
    });
  });
}); 