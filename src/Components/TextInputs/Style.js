import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Utils/Theme";
const styles = StyleSheet.create({
  txtInp: {
    borderWidth: 1,
    backgroundColor: Theme.white,
    borderRadius: 10,
    borderColor: Theme.white,
    padding: "4%",
    height: Theme.hp("7%"),
    color: Theme.black,
  },
  width25Flex: {
    width: "25%",
    flexDirection: "row",
    alignItems: Theme.align,
  },
  width25: {
    width: "25%",
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  txtInp75Width: {
    width: "75%",
    height: Theme.hp("8%"),
    borderRightWidth: 0.5,
  },
  wrapIconTxtInp: {
    borderRadius: 10,
    height: Theme.hp("8%"),
    flexDirection: "row",
    width: "100%",
  },
  txtInpBgWhite: {
    borderWidth: 0.5,
    backgroundColor: Theme.lightGrey,
    borderRadius: 10,
    borderColor: Theme.white,
    padding: "4%",
    height: Theme.hp("7%"),
    width: Theme.wp("35"),
  },
  txtSend: {
    fontWeight: Theme.bold,
    color: Theme.primary,
    fontSize: Theme.txtMedium,
  },
});

export default styles;
