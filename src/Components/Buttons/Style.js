import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Utils/Theme";
const styles = StyleSheet.create({
  txtLabel: {
    color: Theme.primary,
    fontWeight: Theme.bold,
    fontSize: Theme.txtMedium,
  },
  btnWrap: {
    backgroundColor: Theme.white,
    width: Theme.wp("40%"),
    height: Theme.hp("7%"),
    borderRadius: 10,
    elevation: 5,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  btnMediumWrap: {
    backgroundColor: Theme.white,
    width: Theme.wp("80%"),
    height: Theme.hp("7%"),
    borderRadius: 10,
    elevation: 5,
    marginTop: 10,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  dd: {
    justifyContent: Theme.align,
  },
});

export default styles;
