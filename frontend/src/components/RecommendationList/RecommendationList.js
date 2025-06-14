import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

function RecommendationList({ recommendations }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Recomendações</h2>
      {recommendations.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {recommendations.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">
          Nenhuma recomendação encontrada. Preencha o formulário para ver as
          recomendações.
        </p>
      )}
    </div>
  );
}

export default RecommendationList;
