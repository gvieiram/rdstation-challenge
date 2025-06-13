// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: '' },
  products = []
) => {
  const { 
    selectedPreferences = [], 
    selectedFeatures = [], 
    selectedRecommendationType = '' 
  } = formData;
  
  if (
    (selectedPreferences.length === 0 && selectedFeatures.length === 0) || 
    (selectedRecommendationType !== 'SingleProduct' && selectedRecommendationType !== 'MultipleProducts')
  ) {
    return [];
  }

  // Calculate score for each product
  const productScores = products.map((product, index) => {
    let score = 0;
    
    selectedPreferences.forEach(preference => {
      if (product.preferences.includes(preference)) {
        score += 1;
      }
    });
    
    selectedFeatures.forEach(feature => {
      if (product.features.includes(feature)) {
        score += 1;
      }
    });
    
    return {
      ...product,
      score,
      originalIndex: index
    };
  });
  
  const matchedProducts = productScores.filter(product => product.score > 0);
  
  if (matchedProducts.length === 0) {
    return [];
  }
  
  const sortedProducts = matchedProducts.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score; // Higher score first
    }
    return b.originalIndex - a.originalIndex; // Last valid product
  });
  
  if (selectedRecommendationType === 'SingleProduct') {
    return [sortedProducts[0]];
  }
  
  return sortedProducts;
};

const recommendationService = { getRecommendations };

export default recommendationService;
