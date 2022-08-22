import React from 'react';

import { render } from '@testing-library/react-native';
import { MovieCardHorizontal } from '../../components/MovieCardHorizontal';

const Data = {
    imageUrl: '',
    title: '',
    info: '',
    date: ''
}

import { ThemeProvider } from 'styled-components/native';
import theme from '../../styles/theme';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { MovieCardVertical } from '../../components/MovieCardVertical';

const Providers: React.FC = ({ children }) => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </Provider>
);

describe('Horizontal Card Component', () => {
    it('Check if render Horizontal Card', () => {
        const { getByTestId } = render(
            <MovieCardHorizontal testID='card-horizontal' imageUrl={Data.imageUrl} info={Data.info} title={Data.title} date={Data.date} />, {
            wrapper: Providers
        }
        );

        const inputComponent = getByTestId('card-horizontal');

        console.log('inputComponent', inputComponent)
    })
})

describe('Vertical Card Component', () => {
    it('Check if render Vertical Card', () => {
        const { getByTestId } = render(
            <MovieCardVertical testID='card-horizontal' imageUrl={Data.imageUrl} info={Data.info} title={Data.title} date={Data.date} />, {
            wrapper: Providers
        }
        );

        const inputComponent = getByTestId('card-horizontal');

        console.log('inputComponent', inputComponent)
    })
})