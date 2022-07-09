import react from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import dark from '../../theme/dark';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${width};
`;

export const LeftContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

export const Thumbnail = styled.View`
  height: 40px;
  flex-basis: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${() => dark.COLOR.DRAW_DETAILS};
`;

export const ThumbnailText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${props => dark.COLOR.FONT_300};
`;

export const TitleContainer = styled.View`
  width: ${width - 180};
  padding-left: 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${props => (props.isPlaying === 'true' ? dark.COLOR.DRAW_DETAILS : dark.COLOR.FONT_300)};
`;

export const TimeTitle = styled.Text`
  font-size: 12px;
  color: ${props => dark.COLOR.FONT_600};
`;

export const RightContainer = styled.View`
  flex-basis: 30px;
  justify-content: center;
  align-items: center;
`;
