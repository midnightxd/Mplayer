import react from 'react';
import { TouchableWithoutFeedback, View, Text, Modal, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ModalScreen, Title, OptionsContainer, Options, ModalBg } from './styles';
import dark from '../../theme/dark';

const OptionsModal = ({ visible, currentItem, onClose, onPlayPress, onPlayList }) => {
  const { filename } = currentItem;
  return (
    <>
      <StatusBar />
      <Modal animationType="slide" transparent={true} visible={visible}>
        <ModalScreen>
          <Title numberOfLines={2}>{filename}</Title>
          <OptionsContainer>
            <TouchableWithoutFeedback onPress={onPlayPress}>
              <Options>
                Play <MaterialCommunityIcons name="play-circle" size={24} color={dark.COLOR.DETAILS_ICONS} />
              </Options>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={onPlayList}>
              <Options>
                Add to playlist <MaterialCommunityIcons name="playlist-plus" size={30} color={dark.COLOR.DETAILS_ICONS} />
              </Options>
            </TouchableWithoutFeedback>
          </OptionsContainer>
        </ModalScreen>
        <TouchableWithoutFeedback onPress={onClose}>
          <ModalBg />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default OptionsModal;
