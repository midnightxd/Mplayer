import react from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Container, LeftContainer, Thumbnail, ThumbnailText, TitleContainer } from './styles';
import styles from './styles';
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
              <Text
                numberOfLines={1}
                style={[styles.title, { color: activeListItem ? dark.COLOR.FONT_600 : dark.COLOR.FONT_300 }]}
              >
                {title}
              </Text>
              <Text style={styles.timeText}>{convertTime(duration)}</Text>
            </TitleContainer>
          </LeftContainer>
        </TouchableWithoutFeedback>
        <View style={styles.rightContainer}>
          <MaterialCommunityIcons onPress={onOptionPress} name="dots-vertical" size={24} color={dark.COLOR.DETAILS_ICONS} />
        </View>
      </Container>
      <View style={styles.separator} />
    </>
  );
};

export default AudioListItem;
