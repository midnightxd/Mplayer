import react from 'react';
import { StyleSheet } from 'react-native';
import color from '../../misc/color';

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: color.TRANSPARENCY,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 5,
    zIndex: 1000,
  },
  title: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 0,
    color: color.FONT_MEDIUM,
  },
  optionsContainer: {
    padding: 20,
  },
  options: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.FONT,
    paddingVertical: 10,
    letterSpacing: 1,
  },
  modalBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: color.MODAL_BG,
  },
  containerIcon: {
    backgroundColor: '#ccc',
    width: 40,
    height: 40,
  }
});

export default styles;