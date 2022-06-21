import react from "react";
import { StyleSheet, StatusBar } from "react-native";
import color from "../../misc/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.APP_BG,
    paddingTop: StatusBar.currentHeight - StatusBar.currentHeight + 10
  }
});
export default styles;