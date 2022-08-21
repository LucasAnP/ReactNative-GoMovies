import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: ${RFPercentage(15)}px;
  width: 100%;

  flex-direction: row;

  margin-bottom: 30px;

  justify-content: space-between;
`;

export const ImageContainerRounded = styled.View`
  height: 100%;
  width: 30%;
`;

export const Image = styled.Image`
  flex: 1;

  border-radius: 15px;
`;

export const InfoContainer = styled.View`
  width: 65%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};

  color: ${({ theme }) => theme.colors.text_white};

  margin-top: 5px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};

  color: ${({ theme }) => theme.colors.text};
  text-align: justify;

  line-height: 18px;
`;

export const TitleAndSubContainer = styled.View`
  height: 70%;
  width: 100%;
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
