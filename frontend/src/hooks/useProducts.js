import { useEffect, useState } from 'react';
import getProducts from '../services/product.service';

const useProducts = () => {
  const [preferences, setPreferences] = useState([]);
  const [features, setFeatures] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        const allPreferences = [];
        const allFeatures = [];

        setProducts(products);

        // Changed to sort by alphabetically to maintain a better UX
        products.forEach((product) => {
          allPreferences.push(...product.preferences);
          allFeatures.push(...product.features);
        });

        setPreferences(
          [...new Set(allPreferences)].sort((a, b) => a.localeCompare(b))
        );
        setFeatures(
          [...new Set(allFeatures)].sort((a, b) => a.localeCompare(b))
        );
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
      }
    };

    fetchData();
  }, []);

  return { preferences, features, products };
};

export default useProducts;
