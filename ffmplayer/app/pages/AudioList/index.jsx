import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { AudioContext } from '../../context/AudioProvider';
import { RecyclerListView, LayoutProvider } from 'recyclerlistview';
import { Audio } from 'expo-av';
import { nextPlay, pause, play, resume } from '../../misc/audioController';
import AudioListItem from '../../components/AudioListItem';
import Screen from '../../components/ScreenView';
import OptionsModal from '../../components/OptionsModal';
import { storeAudioForNextOpening } from '../../misc/helper';

export class AudioList extends Component {
  static contextType = AudioContext;

  constructor(props) {
    super(props);
    this.state = { OptionsModalVisible: false };

    this.currentItem = {};
  }

  layoutProvider = new LayoutProvider(
    i => 'audio',
    (type, dim) => {
      switch (type) {
        case 'audio':
          dim.width = Dimensions.get('window').width;
          dim.height = 70;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
      }
    },
  );

  onPlabackStatusUpdate = async playbackStatus => {
    if (playbackStatus.isLoaded && playbackStatus.isPlaying) {
      this.context.updateState(this.context, {
        playbackPosition: playbackStatus.positionMillis,
        playbackDuration: playbackStatus.durationMillis,
      });
    }

    if (playbackStatus.didJustFinish) {
      const nextAudioIndex = this.context.currentAudioIndex + 1;

      // There is no next audio play or the current audio is the last
      if (nextAudioIndex >= this.context.totalAudioCount) {
        this.context.playbackObject.unloadAsync();
        this.context.updateState(this.context, {
          soundObject: null,
          currentAudio: this.context.audioFiles[0],
          isPlaying: false,
          currentAudioIndex: [0],
          playbackPosition: null,
          playbackDuration: null,
        });
        
        await storeAudioForNextOpening(this.context.audioFiles[0], 0);
      }

      // Otherwise we want to select the next audio
      const audio = this.context.audioFiles[nextAudioIndex];
      const status = await nextPlay(this.context.playbackObject, audio.uri);
      this.context.updateState(this.context, {
        soundObject: status,
        currentAudio: audio,
        isPlaying: true,
        currentAudioIndex: nextAudioIndex,
      });

      await storeAudioForNextOpening(audio, nextAudioIndex);
    }
  };

  handleAudioPress = async audio => {
    const { soundObject, playbackObject, currentAudio, updateState, audioFiles } = this.context;

    // Playing audio for the first time
    if (soundObject === null) {
      const playbackObject = new Audio.Sound();
      const status = await play(playbackObject, audio.uri);
      const index = audioFiles.indexOf(audio);

      updateState(this.context, {
        currentAudio: audio,
        playbackObject: playbackObject,
        soundObject: status,
        isPlaying: true,
        currentAudioIndex: index,
      });

      playbackObject.setOnPlaybackStatusUpdate(this.onPlabackStatusUpdate);
      return storeAudioForNextOpening(audio, index);
    }

    // PuseAudio
    if (soundObject.isLoaded && soundObject.isPlaying && currentAudio.id === audio.id) {
      const status = await pause(playbackObject);

      return updateState(this.context, {
        soundObject: status,
        isPlaying: false,
      });
    }

    // Resume audio
    if (soundObject.isLoaded && !soundObject.isPlaying && currentAudio.id === audio.id) {
      const status = await resume(playbackObject);

      return updateState(this.context, {
        soundObject: status,
        isPlaying: true,
      });
    }

    // Select another audio
    if (soundObject.isLoaded && currentAudio.id !== audio.id) {
      const status = await nextPlay(playbackObject, audio.uri);
      const index = audioFiles.indexOf(audio);

      return updateState(this.context, {
        currentAudio: audio,
        soundObject: status,
        isPlaying: true,
        currentAudioIndex: index,
      });
    }
  };

  componentDidMount() {
    this.context.loadPreviousAudio();
  }

  rowRender = (type, item, index, extendedState) => {
    return (
      <AudioListItem
        title={item.filename}
        isPlaying={extendedState.isPlaying}
        activeListItem={this.context.currentAudioIndex === index}
        duration={item.duration}
        onAudioPress={() => this.handleAudioPress(item)}
        onOptionPress={() => {
          this.currentItem = item;
          this.setState({ ...this.state, OptionsModalVisible: true });
        }}
      />
    );
  };

  render() {
    return (
      <AudioContext.Consumer>
        {({ dataProvider, isPlaying }) => {
          if (!dataProvider._data.length) return null;
          return (
            <Screen>
              <RecyclerListView
                dataProvider={dataProvider}
                layoutProvider={this.layoutProvider}
                rowRenderer={this.rowRender}
                extendedState={{ isPlaying }}
              />
              <OptionsModal
                currentItem={this.currentItem}
                onClose={() => this.setState({ ...this.state, OptionsModalVisible: false })}
                visible={this.state.OptionsModalVisible}
              />
            </Screen>
          );
        }}
      </AudioContext.Consumer>
    );
  }
}

export default AudioList;
