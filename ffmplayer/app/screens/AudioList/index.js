import { Text, ScrollView, View } from "react-native";
import React, { Component } from "react";
import styles from "../AudioList/styles";
import { AudioContext } from "../../context/AudioProvider";
import { Ionicons } from "@expo/vector-icons";

export class AudioList extends Component {
  static contextType = AudioContext;

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.context.audioFiles.map((item) => (
          <Text style={styles.text} key={item.id}>
            <Ionicons name="musical-note" size={24} color="pink" />
            {item.filename}
          </Text>
        ))}
      </ScrollView>
    );
  }
}

export default AudioList;
