import AnimatedLottieView from "lottie-react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${RFPercentage(52)}px;
  height: ${RFPercentage(110)}px;

  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.9);
`;

export const LottieIcon = styled(AnimatedLottieView)`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
`;
