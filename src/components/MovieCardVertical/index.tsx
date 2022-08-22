import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
    Container,
    DateContainer,
    Image,
    ImageContainerRounded,
    InfoContainer,
    Subtitle,
    Title,
    TitleAndSubContainer,
    SubtitleDate,
} from "./styles";

interface Props extends TouchableOpacityProps {
    imageUrl: string;
    title: string;
    info: string;
    date: string;
}

export function MovieCardVertical({ imageUrl, title, info, date, ...rest }: Props) {
    return (
        <Container {...rest} >
            <ImageContainerRounded>
                <Image source={{ uri: imageUrl }} resizeMode={"stretch"} />
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
