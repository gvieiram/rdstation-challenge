import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Features from './Features';

describe('Features component', () => {
  const features = ['Feature 1', 'Feature 2', 'Feature 3'];
  test('should render all features', () => {
    render(
      <Features
        features={features}
        selectedFeatures={[]}
        onFeatureChange={() => {}}
      />
    );
    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  test('should check/uncheck checkbox and call callback', () => {
    const onFeatureChange = jest.fn();
    render(
      <Features
        features={features}
        selectedFeatures={['Feature 1']}
        onFeatureChange={onFeatureChange}
      />
    );
    const checkbox = screen.getByLabelText('Feature 2');
    fireEvent.click(checkbox);
    expect(onFeatureChange).toHaveBeenCalledWith(['Feature 1', 'Feature 2']);
  });

  test('should reflect checked selectedFeatures', () => {
    render(
      <Features
        features={features}
        selectedFeatures={['Feature 2']}
        onFeatureChange={() => {}}
      />
    );
    const checkbox = screen.getByLabelText('Feature 2');
    expect(checkbox).toBeChecked();
  });
});
