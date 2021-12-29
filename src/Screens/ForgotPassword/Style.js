import { StyleSheet } from "react-native";
import Theme from "../../Utils/Theme";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.primary,
  },
  setWidth: {
    width: Theme.width,
    paddingVertical: "10%",
    alignSelf: Theme.align,
  },
  imgForgot: {
    width: Theme.wp("50%"),
    height: Theme.wp("40%"),
    alignSelf: Theme.align,
    marginTop: "10%",
  },
  txtPass: {
    fontSize: Theme.txtLarge,
    color: Theme.txtWhite,
    textAlign: Theme.align,
  },
  txtEnter: {
    fontSize: Theme.txtMedium,
    color: Theme.txtWhite,
    textAlign: Theme.align,
    paddingVertical: "5%",
  },
  wrapBtn: {
    backgroundColor: Theme.primary,
    width: Theme.wp("60%"),
    height: Theme.hp("15%"),
    alignItems: Theme.align,
    justifyContent: Theme.align,
    margin: "5%",
  },
  txtPhone: {
    color: Theme.txtBlack,
    fontWeight: Theme.bold,
    // textAlign: Theme.align,
    margin: "2%",
  },
  wrapTxtInp: {
    paddingHorizontal: 20,
  },
  txtEmail: {
    color: Theme.txtWhite,
    fontWeight: Theme.bold,
    margin: "2%",
  },
  errorTxt: {
    color: Theme.errorColor,
    fontSize: Theme.txtSmall,
    margin: "1%",
  },
});

export default styles;
