import react from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Container, LeftContainer, Thumbnail, ThumbnailText, TitleContainer, Title, TimeTitle, RightContainer } from './styles';
import dark from '../../theme/dark';

const getThumbnailText = fileName => fileName[0];

const convertTime = minutes => {
  if (minutes) {
    const hrs = minutes / 60;
    const minute = hrs.toString().split('.')[0];
    const percent = parseInt(hrs.toString().split('.')[1].slice(0, 2));
    const sec = Math.ceil((60 * percent) / 100);

    if (parseInt(minute) < 10 && sec < 10) return `0${minute}:0${sec}`;
    if (parseInt(minute) < 10) return `0${minute}:${sec}`;
    if (sec < 10) return `${minute}:0${sec}`;

    return `${minute}:${sec}`;
  }
};

const renderPlayPauseIcons = isPlaying => {
  if (isPlaying) return <Ionicons name="ios-pause" size={24} color={dark.COLOR.FONT_600} />;
  return <Ionicons name="ios-play" size={24} color={dark.COLOR.FONT_600} />;
};

const renderColor = isPlaying => {
  if (isPlaying) return 'true';
  return 'false';
};

const AudioListItem = ({ title, duration, onOptionPress, onAudioPress, isPlaying, activeListItem }) => {
  return (
    <>
      <Container>
        <TouchableWithoutFeedback onPress={onAudioPress}>
          <LeftContainer>
            <Thumbnail>
              <ThumbnailText>{activeListItem ? renderPlayPauseIcons(isPlaying) : getThumbnailText(title)}</ThumbnailText>
            </Thumbnail>
            <TitleContainer>
              <Title numberOfLines={1}>{title}</Title>
              <TimeTitle>{convertTime(duration)}</TimeTitle>
            </TitleContainer>
          </LeftContainer>
        </TouchableWithoutFeedback>
        <RightContainer>
          <MaterialCommunityIcons
            onPress={onOptionPress}
            name="dots-horizontal-circle"
            size={24}
            color={dark.COLOR.DRAW_DETAILS}
          />
        </RightContainer>
      </Container>
    </>
  );
};

export default AudioListItem;
