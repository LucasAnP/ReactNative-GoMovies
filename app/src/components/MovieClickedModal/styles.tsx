import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ModalContainer = styled.View`
  width: 90%;
  height: 95%;

  position: absolute;
  z-index: 2;
  align-self: center;

  border-radius: 15px;

  background-color: ${({ theme }) => theme.colors.background_opacity};
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 50%;
`;

export const ImageBackground = styled.Image`
  flex: 1;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};

  color: ${({ theme }) => theme.colors.text_white};

  margin-bottom: 5px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary};

  color: ${({ theme }) => theme.colors.text};
  text-align: justify;
`;

export const TitleAndSubContainer = styled.View`
  height: 70%;
  width: 100%;

  padding: 5%;
`;

export const DateContainer = styled.View`
  height: 30%;
  width: 100%;
`;

export const SubtitleDate = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};

  color: ${({ theme }) => theme.colors.text};
`;

export const AbsoluteContainer = styled.TouchableOpacity`
  position: absolute;
  z-index: 2;

  top: 5%;
  left: 5%;

  background-color: rgba(236,236,236,0.5);

  border-radius: 5px;
`;


