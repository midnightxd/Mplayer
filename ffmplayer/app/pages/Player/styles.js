import react from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import dark from '../../theme/dark';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${props => dark.COLOR.APP_BG};
`;

export const AudioCount = styled.Text`
  color: ${props => dark.COLOR.FONT};
  font-size: 20px;
  text-align: right;
  margin-right: 20px;
`;

export const MusicArt = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AudioContainer = styled.View`
  align-items: center;
`;

export const AudioName = styled.Text`
  color: ${props => dark.COLOR.FONT_600};
  font-weight: bold;
  font-size: 22px;
`;

// width here
export const AudioController = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const ButtomAlign = styled.View`
  background-color: ${props => dark.COLOR.BACKGROUND};
  border-width: 1px;
  border-color: ${props => dark.COLOR.DRAW_DETAILS};
  border-radius: 50px;
  height: 80px;
  margin: 0 30px 0 30px;
  justify-content: center;
  align-items: center;
`;
