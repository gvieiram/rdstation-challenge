import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Button from './index';

describe('Button component', () => {
  test('should render the text correctly', () => {
    render(<Button text="Clique aqui" />);
    expect(screen.getByText('Clique aqui')).toBeInTheDocument();
  });

  test('should render children when provided', () => {
    render(<Button>Botão com children</Button>);
    expect(screen.getByText('Botão com children')).toBeInTheDocument();
  });

  test('should render the checked icon', () => {
    render(<Button icon="checked" text="Com ícone" />);
    expect(
      screen.getByTestId('button').querySelector('svg')
    ).toBeInTheDocument();
  });

  test('should render the arrow-right icon', () => {
    render(<Button icon="arrow-right" text="Com ícone" />);
    expect(
      screen.getByTestId('button').querySelector('svg')
    ).toBeInTheDocument();
  });

  test('should apply the primary variant class', () => {
    render(<Button variant="primary" text="Primary" />);
    const button = screen.getByTestId('button');
    expect(button.className).toMatch(/bg-blue-sky/);
  });

  test('should apply the secondary variant class', () => {
    render(<Button variant="secondary" text="Secondary" />);
    const button = screen.getByTestId('button');
    expect(button.className).toMatch(/bg-gray-200/);
  });

  test('should apply disabled state', () => {
    render(<Button isDisabled text="Desabilitado" />);
    const button = screen.getByTestId('button');
    expect(button).toBeDisabled();
    expect(button.className).toMatch(/opacity-50/);
  });

  test('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Clique" onClick={handleClick} />);
    fireEvent.click(screen.getByTestId('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('should render nothing if isVisible is false', () => {
    const { container } = render(
      <Button isVisible={false} text="Não aparece" />
    );
    expect(container).toBeEmptyDOMElement();
  });
});
