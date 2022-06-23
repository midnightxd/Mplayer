import react from "react";
import { StyleSheet, Dimensions } from "react-native";
import color from "../../misc/color";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.APP_BG,
  },
  audioCount: {
    color: color.FONT,
    fontSize: 20,
    textAlign: "right",
    marginRight: 20,
  },
  contentIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  audioPlayerContainer: {
    alignItems: "center",
  },
  audioName: {
    color: color.FONT_MEDIUM,
    fontWeight: "bold",
    fontSize: 22,
  },
  audioController: {
    width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
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
