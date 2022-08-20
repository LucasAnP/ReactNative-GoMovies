import React from 'react';
import { Text, View } from 'react-native';

import {
    Container, Image, ImageContainerRounded, Subtitle, Title
} from './styles';

interface Props {
    imageUrl: string,
    title: string,
    info: string
}

export function MovieCardHorizontal({ imageUrl, title, info }: Props) {
    return (
        <Container>
            <ImageContainerRounded>
                <Image source={{ uri: imageUrl }} />
            </ImageContainerRounded>
            <Title>{title}</Title>
            <Subtitle>{info}</Subtitle>
        </Container>
    );
}