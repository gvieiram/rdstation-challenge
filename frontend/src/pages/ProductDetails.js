import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import useProducts from '../hooks/useProducts';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productSelected = products.find((p) => Number(p.id) === Number(id));

    if (productSelected) {
      setProduct(productSelected);
    }
  }, [id, products]);

  const handleGoBack = () => navigate('/');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Produto não encontrado
          </h2>
          <Button text="Voltar para Home" onClick={handleGoBack} />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-12"
    >
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={handleGoBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Voltar
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Preferências
                </h2>
                <ul className="space-y-2">
                  {product.preferences.map((preference, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-blue-dark-200 rounded-full mr-2"></span>
                      {preference}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Funcionalidades
                </h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-blue-dark-200 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Categoria
              </h2>
              <span className="inline-block bg-blue-extra-light text-blue-dark-200 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductDetails;
