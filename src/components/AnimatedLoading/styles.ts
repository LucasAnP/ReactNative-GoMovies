import AnimatedLottieView from "lottie-react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${RFPercentage(100)}px;
  height: ${RFPercentage(110)}px;

  position: absolute;

  align-items: center;
  justify-content: center;

  background-color: rgba(1, 1, 1, 0.7);
`;

export const LottieIcon = styled(AnimatedLottieView)`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
`;
