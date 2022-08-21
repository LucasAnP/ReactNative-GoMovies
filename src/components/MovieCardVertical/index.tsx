import React from 'react';
import { Text, View } from 'react-native';

import {
    Container, Image, ImageContainerRounded, InfoContainer, Subtitle, Title
} from './styles';

interface Props {
    imageUrl: string,
    title: string,
    info: string,
    date: string
}

export function MovieCardVertical({ imageUrl, title, info, date }: Props) {
    return (
        <Container>
            <ImageContainerRounded>
                <Image source={{ uri: imageUrl }} resizeMode={'center'} />
            </ImageContainerRounded>
            <InfoContainer>
                <Title>{title}</Title>
                <Subtitle>{info}</Subtitle>
                <Subtitle>{date}</Subtitle>
            </InfoContainer>
        </Container>
    );
}