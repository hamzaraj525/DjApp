import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Utils/Theme";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.primary,
    padding: 10,
  },
  imgSplash: {
    width: Theme.wp("15%"),
    height: Theme.wp("15%"),
    margin: 20,
  },
  txtWelcome: {
    color: Theme.white,
    fontWeight: "bold",
    fontSize: Theme.txtLarge,
  },
  item: {
    flexDirection: "row",
    margin: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: Theme.txtWhite,
    alignItems: Theme.align,
  },
  icon: {
    width: 50,
    height: 50,
    paddingTop: 10,
  },
  title: {
    color: Theme.black,
    fontSize: 20,
  },
  download: {
    width: 50,
    height: 50,
    paddingTop: 5,
    position: "absolute",
    right: 0,
    alignSelf: "flex-end",
  },
  row: {
    flexDirection: "row",
  },
});

export default styles;
