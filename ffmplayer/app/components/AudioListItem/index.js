import react from "react";
import {  TouchableWithoutFeedback, View, Text } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import color from "../../misc/color";

const getThumbnailText =(fileName) => fileName[0];

const convertTime = minutes => {
  if(minutes) {
    const hrs = minutes / 60;
    const minute = hrs.toString().split('.')[0];
    const percent = parseInt(hrs.toString().split('.')[1].slice(0, 2));
    const sec = Math.ceil((60 * percent) / 100);

    if(parseInt(minute) < 10 && sec < 10) return `0${minute}:0${sec}`;
    if(parseInt(minute) < 10) return `0${minute}:${sec}`;
    if(sec < 10) return `${minute}:0${sec}`;
    return `${minute}:${sec}`;
  }
}

const renderPlayPauseIcons = isPlaying => {
  if(isPlaying) return <Ionicons name="ios-pause" size={24} color={color.DETAILS_ICONS} />
  return <Ionicons name="ios-play" size={24} color={color.DETAILS_ICONS} />
}

const AudioListItem = ({ title, duration, onOptionPress, onAudioPress, isPlaying, activeListItem}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onAudioPress}>
        <View style={styles.leftContainer}>
          <View style={[styles.thumbnail, {backgroundColor: activeListItem ? color.SOUND_SELECT : color.THUMBNAIL_BG}]}>
            <Text style={styles.thumbnailText}>
              {activeListItem ? renderPlayPauseIcons(isPlaying) : getThumbnailText(title)}
              </Text>
          </View>
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} style={[styles.title, {color: activeListItem ? color.FONT_MEDIUM : color.FONT}]}>
              {title}
            </Text>
            <Text style={styles.timeText}>{convertTime(duration)}</Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
        <View style={styles.rightContainer}>
          <MaterialCommunityIcons
            onPress={onOptionPress}
            name="dots-vertical"
            size={24}
            color={color.DETAILS_ICONS}
          />
        </View>
      </View>
      <View style={styles.separator} />
    </>
  );
};

export default AudioListItem;
