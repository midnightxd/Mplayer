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

export class AudioList extends Component {
  static contextType = AudioContext;

  constructor(props) {
    super(props);
    this.state = {
      OptionsModalVisible: false,
      playbackObject: null,
      soundObject: null,
      currentAudio: {}
    };

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
    // Playing audio for the first time
    if(this.state.soundObject === null) {
      const playbackObject = new Audio.Sound();
      const status = await playbackObject.loadAsync({uri: audio.uri}, {shouldPlay: true});
      return this.setState({...this.state, playbackObject: playbackObject, currentAudio: audio, soundObject: status});
    }

    // PuseAudio
    if(this.state.soundObject.isLoaded && this.state.soundObject.isPlaying) {
      const status = await this.state.playbackObject.setStatusAsync({shouldPlay: false});
      return this.setState({...this.state, soundObject: status});
    }

    // Resume audio
    if(this.state.soundObject.isLoaded && !this.state.soundObject.isPlaying && this.state.currentAudio.id === audio.id){
      const status = await this.state.playbackObject.playAsync();
      return this.setState({...this.state, soundObject: status});
    }
  }

  rowRender = (type, item) => {
    return (
      <AudioListItem
        title={item.filename}
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
        {({ dataProvider }) => {
          return (
            <Screen>
              <RecyclerListView
                dataProvider={dataProvider}
                layoutProvider={this.layoutProvider}
                rowRenderer={this.rowRender}
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
