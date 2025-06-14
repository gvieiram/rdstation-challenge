import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Preferences from './Preferences';

describe('Preferences component', () => {
  const preferences = ['Pref 1', 'Pref 2', 'Pref 3'];
  test('should render all preferences', () => {
    render(
      <Preferences
        preferences={preferences}
        selectedPreferences={[]}
        onPreferenceChange={() => {}}
      />
    );
    preferences.forEach((pref) => {
      expect(screen.getByText(pref)).toBeInTheDocument();
    });
  });

  test('should check/uncheck checkbox and call callback', () => {
    const onPreferenceChange = jest.fn();
    render(
      <Preferences
        preferences={preferences}
        selectedPreferences={['Pref 1']}
        onPreferenceChange={onPreferenceChange}
      />
    );
    const checkbox = screen.getByLabelText('Pref 2');
    fireEvent.click(checkbox);
    expect(onPreferenceChange).toHaveBeenCalledWith(['Pref 1', 'Pref 2']);
  });

  test('should reflect checked selectedPreferences', () => {
    render(
      <Preferences
        preferences={preferences}
        selectedPreferences={['Pref 2']}
        onPreferenceChange={() => {}}
      />
    );
    const checkbox = screen.getByLabelText('Pref 2');
    expect(checkbox).toBeChecked();
  });
});
