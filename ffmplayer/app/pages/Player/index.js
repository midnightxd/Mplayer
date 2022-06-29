import React, { useContext, useEffect } from 'react';
import { Dimensions, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AudioContext } from '../../context/AudioProvider';
import Slider from '@react-native-community/slider';
import Screen from '../../components/ScreenView';
import PlayerButtom from '../../components/PlayerButtom';
import { Container, AudioCount, MusicArt, AudioName, AudioContainer, AudioController, ButtomAlign } from './styles';
import dark from '../../theme/dark';
import {pause, play, resume} from '../../misc/audioController';

const { width } = Dimensions.get('window');

const Player = () => {
  const context = useContext(AudioContext);
  const { playbackPosition, playbackDuration } = context;

  const calculateSeebBar = () => {
    if (playbackPosition !== null && playbackDuration !== null) return playbackPosition / playbackDuration;

    return 0;
  };

  useEffect(() => {
    context.loadPreviousAudio();
  }, []);

  const handlePlayPause = async () => {
    // Play
    if (context.soundObject === null) {
      const audio = context.currentAudio;
      const status = await play(context.playbackObject, audio.uri)

      return context.updateState(context, {
        soundObject: status,
        currentAudio: audio,
        isPlaying: true,
        currentAudioIndex: context.currentAudioIndex
      });
    };

    // Pause
    if (context.soundObject && context.soundObject.isPlaying) { 
      const status = await pause(context.playbackObject);

      return context.updateState(context, {
        soundObject: status,
        isPlaying: false,
      });
    };

    // Resume
    if (context.soundObject && !context.soundObject.isPlaying) {
      const status = await resume(context.playbackObject);
      return context.updateState(context, {
        soundObject: status,
        isPlaying: true,
      });
    };
  }

  if (!context.currentAudio) return null;

  return (
    <Screen>
      <Container>
        <MaterialIcons name="equalizer" size={24} color={dark.COLOR.DETAILS_ICONS} />
        <AudioCount>{`${context.currentAudioIndex + 1} / ${context.totalAudioCount}`}</AudioCount>
        <MusicArt>
          <Text style={{ color: '#ffffff' }}>is playing</Text>
        </MusicArt>
        <AudioContainer>
          <AudioName numberOfLines={1}>{context.currentAudio.filename}</AudioName>
          <Slider
            style={{ width: width, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            value={calculateSeebBar()}
            minimumTrackTintColor={dark.COLOR.DETAILS_ICONS}
            maximumTrackTintColor="#505050"
          />
          <AudioController>
            <PlayerButtom iconType="PREV" />
            <ButtomAlign>
              <PlayerButtom
                onPress={(handlePlayPause)}
                size={55}
                style={{ marginHorizontal: 10 }}
                iconType={context.isPlaying ? 'PLAY' : 'PAUSE'}
              />
            </ButtomAlign>
            <PlayerButtom iconType="NEXT" />
          </AudioController>
        </AudioContainer>
      </Container>
    </Screen>
  );
};

export default Player;
