import React from 'react';

import {
    Container, LottieIcon
} from './styles';

export function AnimatedLoading() {
    return (
        <Container>
            <LottieIcon
                autoPlay
                style={{
                    width: 200,
                    height: 200,
                }}
                source={require('../../../src/assets/lottie/loading-animated.json')}
            />
        </Container>
    );
}