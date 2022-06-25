import react from 'react';
import { AntDesign } from '@expo/vector-icons';
import dark from '../../theme/dark';

const PlayerButtom = props => {
  const { iconType, size = 40, iconColor = dark.COLOR.FONT_600, Props, onPress } = props;
  const getIconName = type => {
    switch (type) {
      case 'PLAY':
        return 'pausecircle';
      case 'PAUSE':
        return 'playcircleo';
      case 'NEXT':
        return 'forward';
      case 'PREV':
        return 'banckward';
    }
  };
  return <AntDesign onPress={onPress} name={getIconName(iconType)} size={size} color={iconColor} {...props} />;
};

export default PlayerButtom;
