import react from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Modal,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles";
import color from "../../misc/color";

const OptionsModal = ({
  visible,
  currentItem,
  onClose,
  onPlayPress,
  onPlayList,
}) => {

  const { filename } = currentItem;
  return (
    <>
      <StatusBar />
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.modal}>
          <Text style={styles.title} numberOfLines={2}>
            {filename}
          </Text>
          <View style={styles.optionsContainer}>
            <TouchableWithoutFeedback onPress={onPlayPress}>
              <Text style={styles.options}>Play <MaterialCommunityIcons name="play-circle" size={24} color={color.DETAILS_ICONS} /></Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={onPlayList}>
              <Text style={styles.options}>Add to playlist <MaterialCommunityIcons name="playlist-plus" size={30} color={color.DETAILS_ICONS} /></Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.modalBg} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default OptionsModal;
