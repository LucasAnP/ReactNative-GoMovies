import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SplashImage = styled.Image`
  width: ${RFValue(250)}px;
  height: ${RFValue(250)}px;
`;
