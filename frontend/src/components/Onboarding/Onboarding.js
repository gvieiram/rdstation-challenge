import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Button from '../Button';

const steps = [
  {
    title: 'Bem-vindo ao Recomendador de Produtos RD Station',
    description:
      'Vamos ajudar você a encontrar os produtos ideais para o seu negócio.',
    icon: '🎯',
  },
  {
    title: 'Como Funciona',
    description:
      'Nosso sistema analisa suas necessidades e recomenda os produtos RD Station mais adequados para o seu negócio.',
    icon: '⚡',
  },
  {
    title: 'Tipos de Recomendação',
    description:
      'Você pode escolher entre uma recomendação única ou múltiplas opções, dependendo das suas necessidades.',
    icon: '🎁',
  },
  {
    title: 'Vamos Começar!',
    description:
      'Após o tour, você poderá selecionar suas preferências e funcionalidades para receber recomendações personalizadas.',
    icon: '🚀',
  },
];

function Onboarding({ isOpen, onClose, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
      onClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isLastStep = currentStep === steps.length - 1;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto max-w-2xl w-full bg-white rounded-xl p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <span className="text-6xl mb-4 block">
                  {steps[currentStep].icon}
                </span>
                <DialogTitle className="text-2xl font-bold mb-2">
                  {steps[currentStep].title}
                </DialogTitle>
                <Description className="text-gray-600">
                  {steps[currentStep].description}
                </Description>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentStep
                          ? 'bg-blue-dark-200'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    onClick={handleBack}
                    text="Voltar"
                    variant="secondary"
                    isVisible={currentStep > 0}
                  />
                  <Button
                    onClick={handleNext}
                    text={isLastStep ? 'Começar' : 'Próximo'}
                    icon={isLastStep ? 'checked' : 'arrow-right'}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default Onboarding;
