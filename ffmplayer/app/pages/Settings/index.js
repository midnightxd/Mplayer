import react from 'react';
import {Container, Text} from './styles';
import Lottie from 'lottie-react-native';

import sound from '../../../assets/sound.json';

const Settings = () => {
  return (
    <Container>
      <Text>Screen setting</Text>
      <Lottie autoSize resizeMode="contain" source={sound} autoPlay={true} loop />
    </Container>
  );
};

export default Settings;