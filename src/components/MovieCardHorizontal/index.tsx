import React from "react";
import { Text, TouchableOpacityProps, View } from "react-native";

import {
    Container,
    DateContainer,
    Image,
    ImageContainerRounded,
    InfoContainer,
    Subtitle,
    SubtitleDate,
    Title,
    TitleAndSubContainer,
} from "./styles";


interface Props extends TouchableOpacityProps {
    imageUrl: string;
    title: string;
    info: string;
    date: string;
}

export function MovieCardHorizontal({ imageUrl, title, info, date, ...rest }: Props) {
    return (
        <Container {...rest}>
            <ImageContainerRounded>
                <Image source={{ uri: imageUrl }} resizeMode={"center"} />
            </ImageContainerRounded>
            <InfoContainer>
                <TitleAndSubContainer>
                    <Title>{title}</Title>
                    <Subtitle>{info}</Subtitle>
                </TitleAndSubContainer>
                <DateContainer>
                    <SubtitleDate>{date}</SubtitleDate>
                </DateContainer>
            </InfoContainer>
        </Container>
    );
}
