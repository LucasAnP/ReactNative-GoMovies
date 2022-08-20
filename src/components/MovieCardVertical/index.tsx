import React from 'react';
import { Text, View } from 'react-native';

import {
    Container, Image, ImageContainerRounded, InfoContainer, Subtitle, Title
} from './styles';

interface Props {
    imageUrl: string,
    title: string,
    info: string
}

export function MovieCardVertical({ imageUrl, title, info }: Props) {
    return (
        <Container>
            <ImageContainerRounded>
                <Image source={{ uri: imageUrl }} />
            </ImageContainerRounded>
            <InfoContainer>
                <Title>{title}</Title>
                <Subtitle>{info}</Subtitle>
            </InfoContainer>
        </Container>
    );
}