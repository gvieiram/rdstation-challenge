import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import Onboarding from '../components/Onboarding/Onboarding';
import RecommendationList from '../components/RecommendationList/RecommendationList';

function Home() {
  const [recommendations, setRecommendations] = useState([]);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleRecommendationsUpdate = (newRecommendations) => {
    setRecommendations(newRecommendations);
  };

  const handleOnboardingComplete = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setShowOnboarding(false);
  };

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">
          Encontre os produtos ideais para o seu negócio com o recomendador de
          produtos RD Station
        </h1>
      </div>

      <div className="flex flex-col gap-16 max-w-4xl mx-auto">
        <Form onRecommendationsUpdate={handleRecommendationsUpdate} />
        <div className="flex justify-center w-full">
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>

      <Onboarding
        isOpen={showOnboarding}
        onClose={() => setShowOnboarding(false)}
        onComplete={handleOnboardingComplete}
      />
    </div>
  );
}

export default Home;
