import react, { Component, createContext } from "react";
import { Text, View, Alert } from "react-native";
import * as MediaLibrary from "expo-media-library";
import Message from "../components/AlertMessage";

export const AudioContext = createContext();

export class AudioProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioFiles: [],
      pressionError: false
    };
  }

  permissionAllert = () => {
    Alert.alert("Permission required", "This app needs to read audio files", [
      {
        text: "I am ready",
        onPress: () => this.getPermission(),
      },
      {
        text: "cancel",
        onPress: () => this.permissionAllert(),
      },
    ]);
  };

  getAudioFiles = async () => {
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
    });

    media = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
      first: media.totalCount,
    });

    this.setState({ ...this.state, audioFiles: media.assets });
    //console.log(media.assets.length);
  };

  getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    if (permission.granted) {
      // we want to get all the audio files
      this.getAudioFiles();
    }

    if (!permission.granted && permission.canAskAgain) {
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();
      if (status === "denied" && canAskAgain) {
        // we are going to display alert that user must allow this permission to work this app
        this.permissionAllert();
      }
      if (status === "granted") {
        // we want to get all the audio files
        this.getAudioFiles();
      }
      if (status === "denied" && !canAskAgain) {
        // we want to display some error to the user
        this.setState({...this.state, pressionError: true})
      }
    }
  };

  componentDidMount() {
    this.getPermission();
  };

  render() {
    if(this.state.pressionError) return <Message />
    return (
      <AudioContext.Provider value={{ audioFiles: this.state.audioFiles }}>
        {this.props.children}
      </AudioContext.Provider>
    );
  }
}

export default AudioProvider;
