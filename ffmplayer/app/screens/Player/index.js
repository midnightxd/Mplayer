import React, { useContext } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AudioContext } from "../../context/AudioProvider";
import Slider from "@react-native-community/slider";
import Screen from "../../components/Screen";
import PlayerButtom from "../../components/PlayerButtom";
import styles from "./styles";
import color from "../../misc/color";

const { width } = Dimensions.get("window");

const Player = () => {
  const context = useContext(AudioContext);
  const { playbackPosition, playbackDuration } = context;
  const calculateSeebBar = () => {
    if (playbackPosition !== null && playbackDuration !== null)
      return playbackPosition / playbackDuration;
    return 0;
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.audioCount}>{`${context.currentAudioIndex + 1} / ${
          context.totalAudioCount
        }`}</Text>
        <View style={styles.contentIcon}>
          {/* <MaterialCommunityIcons name="music-circle" size={250} color={context.isPlaying ? color.DETAILS_ICONS : color.TRANSPARENCY} /> */}
          <Image
            style={styles.imageContainer}
            source={require("../../../assets/pngegg.png")}
          />
        </View>
        <View style={styles.audioPlayerContainer}>
          <Text numberOfLines={1} style={styles.audioName}>
            {context.currentAudio.filename}
          </Text>
          <Slider
            style={{ width: width, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            value={calculateSeebBar()}
            minimumTrackTintColor={color.DETAILS_ICONS}
            maximumTrackTintColor="#505050"
          />
          <View style={styles.audioController}>
            <PlayerButtom iconType="PREV" />
            <View style={styles.fix}>
              <PlayerButtom
                onPress={() => {{}}}
                style={styles.buttomPlay}
                size={55}
                iconType={context.isPlaying ? "PLAY" : "PAUSE"}
              />
            </View>
            <PlayerButtom iconType="NEXT" />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Player;
