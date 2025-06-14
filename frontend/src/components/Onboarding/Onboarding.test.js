import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Onboarding from './Onboarding';

describe('Onboarding', () => {
  const onClose = jest.fn();
  const onComplete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render the first step', () => {
    render(
      <Onboarding isOpen={true} onClose={onClose} onComplete={onComplete} />
    );
    expect(
      screen.getByText('Bem-vindo ao Recomendador de Produtos RD Station')
    ).toBeInTheDocument();
  });

  test('should go to the next step when clicking Next', async () => {
    render(
      <Onboarding isOpen={true} onClose={onClose} onComplete={onComplete} />
    );
    fireEvent.click(screen.getByText('Próximo'));
    expect(await screen.findByText('Como Funciona')).toBeInTheDocument();
  });

  test('should go back to the previous step when clicking Back', async () => {
    render(
      <Onboarding isOpen={true} onClose={onClose} onComplete={onComplete} />
    );
    fireEvent.click(screen.getByText('Próximo'));
    await screen.findByText('Como Funciona');
    fireEvent.click(screen.getByText('Voltar'));

    expect(
      await screen.findByText(
        'Bem-vindo ao Recomendador de Produtos RD Station'
      )
    ).toBeInTheDocument();
  });

  test('should call onComplete and onClose when finishing', async () => {
    render(
      <Onboarding isOpen={true} onClose={onClose} onComplete={onComplete} />
    );
    fireEvent.click(screen.getByText('Próximo'));
    await screen.findByText('Como Funciona');
    fireEvent.click(screen.getByText('Próximo'));
    await screen.findByText('Tipos de Recomendação');
    fireEvent.click(screen.getByText('Próximo'));
    await screen.findByText('Vamos Começar!');
    fireEvent.click(screen.getByText('Começar'));
    expect(onComplete).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalled();
  });
});
