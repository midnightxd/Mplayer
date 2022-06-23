import React, { useContext } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AudioContext } from "../../context/AudioProvider";
import Lottie from 'lottie-react-native';
import Slider from "@react-native-community/slider";
import Screen from "../../components/Screen";
import PlayerButtom from "../../components/PlayerButtom";
import { Container, AudioCount, MusicArt, AudioName, AudioContainer, AudioController, ButtomAlign } from "./styles";
import color from "../../misc/color";
import styles from "./styles";
import sound from '../../../assets/sound.json';
const { width } = Dimensions.get("window");

const Player = () => {
  const  context = useContext(AudioContext);
  const { playbackPosition, playbackDuration } = context;

  const calculateSeebBar = () => {
    if (playbackPosition !== null && playbackDuration !== null)
      return playbackPosition / playbackDuration;
    return 0;
  };

   return (
    <Screen>
      <Container>
      <MaterialIcons name="equalizer" size={24} color="red" />
        <AudioCount>{`${context.currentAudioIndex + 1} / ${context.totalAudioCount}`}</AudioCount>
        <MusicArt>
          <Lottie autoSize resizeMode="contain" source={sound} autoPlay={true}loop />
        </MusicArt>
        <AudioContainer>
          <AudioName numberOfLines={1} style={styles.audioName}>
            {context.currentAudio.filename}
          </AudioName>
          <Slider
            style={{ width: width, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            value={calculateSeebBar()}
            minimumTrackTintColor={color.DETAILS_ICONS}
            maximumTrackTintColor="#505050"
          />
          <AudioController style={styles.audioController}>
            <PlayerButtom iconType="PREV" />
            <ButtomAlign>
              <PlayerButtom
                onPress={() => {{}}}
                style={styles.buttomPlay}
                size={55}
                iconType={context.isPlaying ? "PLAY" : "PAUSE"}
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
