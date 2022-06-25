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
  border-radius: 40px;
  background-color: ${activeListItem => (activeListItem ? dark.COLOR.THUMBNAIL_BG : dark.COLOR.SOUND_SELECT)};
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

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: dark.COLOR.FONT,
  },
  rightContainer: {
    flexBasis: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    width: width,
    backgroundColor: '#333',
    opacity: 0,
    height: 1,
    marginTop: 10,
  },
  timeText: {
    fontSize: 12,
    color: '#ccc',
  },
});

export default styles;
