import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          <span className="inline-block bg-blue-extra-light text-blue-dark-200 text-sm px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Preferências:
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.preferences.slice(0, 3).map((preference, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {preference}
              </span>
            ))}
            {product.preferences.length > 3 && (
              <span className="flex items-center text-xs text-gray-500">
                +{product.preferences.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Funcionalidades:
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 3 && (
              <span className="flex items-center text-xs text-gray-500">
                +{product.features.length - 3}
              </span>
            )}
          </div>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="flex items-center justify-between text-blue-dark-200 hover:brightness-75 transition-all duration-300 ease-in-out"
        >
          <span className="font-medium">Ver detalhes</span>
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </div>
    </motion.div>
  );
}

export default ProductCard;
