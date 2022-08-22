import React from 'react';

import { render } from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';
import theme from '../../styles/theme';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Home } from '../../screens/Home';

const Providers: React.FC = ({ children }) => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </Provider>
);

describe('Home Component Render', () => {
    it('Check if render Horizontal Card', () => {
        render(
            <Home />, {
            wrapper: Providers
        }
        );
    })
})