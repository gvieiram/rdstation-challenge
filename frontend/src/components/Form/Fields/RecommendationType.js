import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ selectedType, onRecommendationTypeChange }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Tipo de Recomendação:</h2>
      <div className="flex items-center gap-4">
        <Checkbox
          type="radio"
          name="recommendationType"
          value="SingleProduct"
          checked={selectedType === 'SingleProduct'}
          onChange={() => onRecommendationTypeChange('SingleProduct')}
          className="mr-2"
        >
          Produto Único
        </Checkbox>
        <Checkbox
          type="radio"
          name="recommendationType"
          value="MultipleProducts"
          checked={selectedType === 'MultipleProducts'}
          onChange={() => onRecommendationTypeChange('MultipleProducts')}
          className="mr-2"
        >
          Múltiplos Produtos
        </Checkbox>
      </div>
    </div>
  );
}

export default RecommendationType;
