import react from "react";
import {Text, View} from 'react-native';
import styles from './styles';

const Message = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>it looks like you haven't accept the permission.</Text>
    </View>
  )
};

export default Message;