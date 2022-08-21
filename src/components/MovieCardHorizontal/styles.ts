import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${RFPercentage(25)}px;
  height: ${RFPercentage(50)}px;

  border-radius: 15px;

  margin-right: 30px;
`;

export const InfoContainer = styled.View`
  width: 100%;
  height: 30%;

  justify-content: flex-start;
`;

export const ImageContainerRounded = styled.View`
  height: 70%;
  width: 100%;
`;

export const Image = styled.Image`
  flex: 1;

  border-radius: 15px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};

  color: ${({ theme }) => theme.colors.text_white};

  margin-top: 10px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary};

  color: ${({ theme }) => theme.colors.text};
`;

export const SubtitleDate = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary};

  color: ${({ theme }) => theme.colors.text};
`;
