import react from "react";
import styled from 'styled-components'
import { StyleSheet, Dimensions } from "react-native";
import color from "../../misc/color";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: ${props => color.APP_BG};
`;

export const AudioCount = styled.Text`
  color: ${props => color.FONT};
  font-size: 20px;
  text-align: right;
  margin-right: 20px;
`;

export const MusicArt = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AudioContainer = styled.View`
  align-items: center;
`;

export const AudioName = styled.Text`
  color: ${props => color.FONT_MEDIUM};
  font-weight: bold;
  font-size: 22px;
`;

export const AudioController = styled.View`
  width: ${props => width};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 40px;
`;

export const ButtomAlign = styled.View`
  background-color: ${props => color.APP_BG};
  border-width: 2px;
  border-color: ${props => color.DETAILS_ICONS};
  border-radius: 50px;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  fix: {
    backgroundColor: color.APP_BG,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: color.DETAILS_ICONS,
    borderRadius: 50,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  buttomPlay: {
    marginHorizontal: 10,
  },
  imageContainer: {
    width: 400,
    height: 400,
  },
});

export default styles;
