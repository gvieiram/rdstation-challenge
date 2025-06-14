import React from 'react';
import useForm from '../../hooks/useForm';
import useProducts from '../../hooks/useProducts';
import useRecommendations from '../../hooks/useRecommendations';
import Button from '../Button';
import { Features, Preferences, RecommendationType } from './Fields';

function Form({ onRecommendationsUpdate }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange, resetForm } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations, setRecommendations } =
    useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);

    setRecommendations(dataRecommendations);

    if (onRecommendationsUpdate) {
      onRecommendationsUpdate(dataRecommendations);
    }
  };

  const someProductSelected =
    formData.selectedPreferences.length > 0 ||
    formData.selectedFeatures.length > 0;

  const isSubmitDisabled =
    !someProductSelected || !formData.selectedRecommendationType;

  const handleClearSelection = () => {
    resetForm();
    onRecommendationsUpdate([]);
  };

  return (
    <form
      className="w-full p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
      data-testid="recommendation-form"
    >
      <Preferences
        preferences={preferences}
        selectedPreferences={formData.selectedPreferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        selectedFeatures={formData.selectedFeatures}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        selectedType={formData.selectedRecommendationType}
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <div className="flex items-center gap-6">
        <span
          className="text-sm text-gray-500 font-semibold cursor-pointer hover:text-gray-600 transition-all duration-300 ease-in-out"
          onClick={handleClearSelection}
          data-testid="clear-selection"
        >
          Limpar seleção
        </span>
        <Button
          text="Obter recomendação"
          type="submit"
          isDisabled={isSubmitDisabled}
          data-testid="submit-recommendation"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export default Form;
