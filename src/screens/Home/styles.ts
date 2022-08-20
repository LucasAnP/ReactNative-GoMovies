import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;

  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background_opacity};

  padding: ${getStatusBarHeight() + 18}px 5% 0 5%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};

  color: ${({ theme }) => theme.colors.text_white};
`;

export const ListContainer = styled.View`
  flex: 1;

  margin-top: 15px;

  padding: 5px;
`;

export const TrendingMoviesContainer = styled.View`
  flex: 1;
`;

export const RecommendedMoviesContainer = styled.View`
  flex: 1;

  margin-top: 25px;
`;
