import { Text, ScrollView, View, Dimensions } from "react-native";
import React, { Component } from "react";
import styles from "../AudioList/styles";
import { AudioContext } from "../../context/AudioProvider";
import { Ionicons } from "@expo/vector-icons";
import { RecyclerListView, LayoutProvider } from "recyclerlistview";
import AudioListItem from "../../components/AudioListItem";
import Screen from "../../components/Screen";
import OptionsModal from "../../components/OptionsModal";
import { Audio } from "expo-av";
import { nextPlay, pause, play, resume } from "../../misc/audioController";

export class AudioList extends Component {
  static contextType = AudioContext;

  constructor(props) {
    super(props);
    this.state = { OptionsModalVisible: false };

    this.currentItem = {};
  }

  layoutProvider = new LayoutProvider(
    (i) => "audio",
    (type, dim) => {
      switch (type) {
        case "audio":
          dim.width = Dimensions.get("window").width;
          dim.height = 70;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
      }
    }
  );

  handleAudioPress = async audio => {
    const {soundObject, playbackObject, currentAudio, updateState, audioFiles} = this.context;

    // Playing audio for the first time
    if(soundObject === null) {
      const playbackObject = new Audio.Sound();
      const status = await play(playbackObject, audio.uri);
      const index = audioFiles.indexOf(audio);
      return updateState(this.context, {currentAudio: audio, playbackObject: playbackObject, soundObject: status, isPlaying: true, currentAudioIndex: index});
    }

    // PuseAudio
    if(soundObject.isLoaded && soundObject.isPlaying && currentAudio.id === audio.id) {
      const status = await pause(playbackObject); 
      return updateState(this.context, {soundObject: status, isPlaying: false});
    }

    // Resume audio
    if(soundObject.isLoaded && !soundObject.isPlaying && currentAudio.id === audio.id){
      const status = await resume(playbackObject); 
      return updateState(this.context, {soundObject: status, isPlaying: true});
    }

    // Select another audio
    if(soundObject.isLoaded && currentAudio.id !== audio.id) {
      const status = await nextPlay(playbackObject, audio.uri);
      const index = audioFiles.indexOf(audio);
      return updateState(this.context, {currentAudio: audio, soundObject: status, isPlaying: true, currentAudioIndex: index});
    }
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
          // your function
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
          return (
            <Screen>
              <RecyclerListView
                dataProvider={dataProvider}
                layoutProvider={this.layoutProvider}
                rowRenderer={this.rowRender}
                extendedState={{isPlaying}}
              />
              <OptionsModal
              currentItem={this.currentItem}
                onClose={() =>
                  this.setState({ ...this.state, OptionsModalVisible: false })
                }
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
