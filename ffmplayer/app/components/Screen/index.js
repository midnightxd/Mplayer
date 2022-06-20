import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles';

const Screen = ({children}) => {
  return (
    <View style={styles.container}>{children}</View>
  );
};

export default Screen;