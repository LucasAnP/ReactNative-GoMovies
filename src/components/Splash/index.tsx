import React from 'react';

import { Container, SplashImage } from './styles';

interface SplashProps {
    onLayout: () => void;
}

export function Splash({ onLayout }: SplashProps) {
    return (
        <Container onLayout={onLayout}>
            <SplashImage source={require('../../assets/Main-Logo.png')} />
        </Container>
    )
}