import react from "react";
import { StyleSheet, Dimensions } from "react-native";
import color from "../../misc/color";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 20,
  },
  thumbnail: {
    height: 40,
    flexBasis: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: color.THUMBNAIL_BG,
  },
  thumbnailText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: color.FONT,
  },
  titleContainer: {
    width: width - 180,
    paddingLeft: 20
  },
  title: {
    fontSize: 16,
    color: color.FONT,
  },
  rightContainer: {
    flexBasis: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  separator: {
    width: width,
    backgroundColor: '#333',
    opacity: 0,
    height: 1,
    marginTop: 10
  },
  timeText: {
    fontSize: 12,
    color: '#ccc'
  }
});

export default styles;