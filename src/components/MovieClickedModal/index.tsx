import React from "react";
import Modal from "react-native-modal";

import { AbsoluteContainer, ImageBackground, ImageContainer, ModalContainer, Subtitle, SubtitleDate, Title, TitleAndSubContainer } from "./styles";

import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components";

interface Data {
    image: string;
    title: string;
    date: string;
    detailedInfo: string;
}

interface Props {
    visible: boolean;
    setVisible: (boolean) => void;
    data: Data
}

export function MovieClickedModal({ visible, data, setVisible }: Props) {

    const theme = useTheme();
    return (
        <Modal isVisible={visible} coverScreen={true} backdropOpacity={0.8}>
            <ModalContainer>
                <ImageContainer>
                    <AbsoluteContainer onPress={() => { setVisible(false) }}>
                        <MaterialIcons name="chevron-left" size={32} color={theme.colors.text_white} />
                    </AbsoluteContainer>
                    <ImageBackground source={{ uri: data.image }} />
                </ImageContainer>
                <TitleAndSubContainer>
                    <Title>{data.title}</Title>
                    <SubtitleDate>{data.date}</SubtitleDate>
                    <Subtitle>{data.detailedInfo}</Subtitle>
                </TitleAndSubContainer>
            </ModalContainer>
        </Modal >
    );
}
