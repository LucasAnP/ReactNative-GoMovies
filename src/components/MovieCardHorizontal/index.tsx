import React from 'react';
import { Text, View } from 'react-native';

import {
    Container, Image, ImageContainerRounded, InfoContainer, Subtitle, SubtitleDate, Title
} from './styles';

interface Props {
    imageUrl: string,
    title: string,
    info: string,
    date: string
}

export function MovieCardHorizontal({ imageUrl, title, info, date }: Props) {
    return (
        <Container>
            <ImageContainerRounded>
                <Image source={{ uri: imageUrl }} />
            </ImageContainerRounded>
            <InfoContainer>
                <Title>{title}</Title>
                <Subtitle>{info}</Subtitle>
                <SubtitleDate>{date}</SubtitleDate>
            </InfoContainer>
        </Container>
    );
}