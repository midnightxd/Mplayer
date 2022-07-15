import React, { useContext, useEffect } from 'react';
import { Dimensions, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, AudioCount, MusicArt, AudioName, AudioContainer, AudioController, ButtomAlign } from './styles';
import { AudioContext } from '../../context/AudioProvider';
import { pause, play, resume } from '../../misc/audioController';
import { storeAudioForNextOpening } from '../../misc/helper';

import Slider from '@react-native-community/slider';
import LottieView from 'lottie-react-native';

import Art from '../../../assets/sound.json';
import Screen from '../../components/ScreenView';
import PlayerButtom from '../../components/PlayerButtom';
import dark from '../../theme/dark';

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

  // Player, pause and resume
  const handlePlayPause = async () => {
    if (context.soundObject === null) {
      const audio = context.currentAudio;
      const status = await play(context.playbackObject, audio);

      return context.updateState(context, {
        soundObject: status,
        currentAudio: audio,
        isPlaying: true,
        currentAudioIndex: context.currentAudioIndex,
      });
    }

    // Pause
    if (context.soundObject && context.soundObject.isPlaying) {
      const status = await pause(context.playbackObject);

      return context.updateState(context, {
        soundObject: status,
        isPlaying: false,
      });
    }

    // Resume
    if (context.soundObject && !context.soundObject.isPlaying) {
      const status = await resume(context.playbackObject);
      return context.updateState(context, {
        soundObject: status,
        isPlaying: true,
      });
    }
  };

  const handlePreview = () => {};

  const handleNext = async () => {
    console.log('Next');
    const { isLoaded } = await context.playbackObject.getStatusAsync();
    const isLastAudio = context.currentAudioIndex + 1 === context.totalAudioCount;
    let audio = context.audioFiles[context.currentAudioIndex + 1];
    let index;
    let status;
    if (!isLoaded && !isLastAudio) {
      index = context.currentAudioIndex + 1;
      status = await play(context.playbackObject, audio.uri);
    }
    context.updateState(context, {
      currentAudio: audio,
      playbackObject: context.playbackObject,
      soundObject: status,
      isPlaying: true,
      currentAudioIndex: index,
    });
    storeAudioForNextOpening(audio, index);
  };

  if (!context.currentAudio) return null;

  return (
    <Screen>
      <Container>
        <MaterialIcons name="equalizer" size={24} color={dark.COLOR.DETAILS_ICONS} />
        <AudioCount>{`${context.currentAudioIndex + 1} / ${context.totalAudioCount}`}</AudioCount>
        <MusicArt>
          <LottieView source={Art} autoPlay={true} loop />
        </MusicArt>
        <AudioContainer>
          <AudioName numberOfLines={1}>{context.currentAudio.filename}</AudioName>
          <Slider
            style={{ width: width, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            value={calculateSeebBar()}
            minimumTrackTintColor={dark.COLOR.DRAW_DETAILS}
            maximumTrackTintColor="#505050"
          />
          <AudioController>
            <PlayerButtom iconType="PREV" onPress={handlePreview} />
            <ButtomAlign>
              <PlayerButtom
                onPress={handlePlayPause}
                size={40}
                style={{ marginHorizontal: 20 }}
                iconType={context.isPlaying ? 'PLAY' : 'PAUSE'}
              />
            </ButtomAlign>
            <PlayerButtom iconType="NEXT" onPress={handleNext} />
          </AudioController>
        </AudioContainer>
      </Container>
    </Screen>
  );
};

export default Player;
