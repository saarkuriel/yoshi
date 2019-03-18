import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from '../__mocks__/i18n';

describe('App', () => {

  afterEach(cleanup);

  it('renders a title correctly', () => {
    const { queryByTestId } = render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>,
    );

    expect(queryByTestId('app-title')).not.toBeNull();
    expect(queryByTestId('app-title')).toBeDefined();
  });
});
