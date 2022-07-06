import React, { useContext, useEffect } from 'react';
import { Dimensions, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AudioContext } from '../../context/AudioProvider';
import { Container, AudioCount, MusicArt, AudioName, AudioContainer, AudioController, ButtomAlign } from './styles';
import { pause, play, resume } from '../../misc/audioController';
import { storeAudioForNextOpening } from '../../misc/helper';
import Slider from '@react-native-community/slider';
import LottieView from 'lottie-react-native';
import rocket from '../../../assets/rocket.json';
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
    // Play
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

  const handleNext = () => {
    console.log('Next');
    // const { isLoaded } = await context.playbackObject.getStatusAsync();
    // const isLastAudio = context.currentAudioIndex + 1 === context.totalAudioCount;
    // let audio = context.audioFiles[context.currentAudioIndex + 1];
    // let index;
    // let status;
    // if (!isLoaded && !isLastAudio) {
    //   index = context.currentAudioIndex + 1;
    //   status = await play(context.playbackObject, audio.uri);
    // }
    // context.updateState(context, {
    //   currentAudio: audio,
    //   playbackObject: context.playbackObject,
    //   soundObject: status,
    //   isPlaying: true,
    //   currentAudioIndex: index,
    // });
    // storeAudioForNextOpening(audio, index);
  };

  if (!context.currentAudio) return null;

  return (
    <Screen>
      <Container>
        <MaterialIcons name="equalizer" size={24} color={dark.COLOR.DETAILS_ICONS} />
        <AudioCount>{`${context.currentAudioIndex + 1} / ${context.totalAudioCount}`}</AudioCount>
        <MusicArt>
          <Image style={{width: 400, height: 400, borderRadius: 50}} source={require('../../../assets/276031371_2796568863822619_6118180413241118822_n.jpeg')} />
          {/*<LottieView source={rocket} autoPlay={true} loop />*/}
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
            <PlayerButtom iconType="PREV" onPress={handlePreview} />
            <ButtomAlign>
              <PlayerButtom
                onPress={handlePlayPause}
                size={55}
                style={{ marginHorizontal: 10 }}
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
