import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Utils/Theme";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.primary,
  },
  setView: {
    width: Theme.wp("90%"),
    alignSelf: Theme.align,
  },
  imgSplash: {
    width: Theme.wp("80%"),
    height: Theme.wp("50%"),
    alignSelf: Theme.align,
    marginTop: "10%",
  },
  imgSignUp: {
    width: Theme.wp("50%"),
    height: Theme.wp("40%"),
    alignSelf: Theme.align,
    marginTop: "10%",
  },
  imgLogin: {
    width: Theme.wp("50%"),
    height: Theme.wp("40%"),
    alignSelf: Theme.align,
    marginTop: "10%",
  },
  txtParent: {
    color: Theme.txtWhite,
    fontSize: Theme.txtMedium1,
    fontWeight: Theme.bold,
    marginTop: "2%",
  },
  txtWelcome: {
    color: Theme.white,
    fontWeight: "700",
    fontSize: Theme.txtMedium1,
    marginTop: "5%",
    bottom: -10,
  },
  txtCardPass: {
    color: Theme.white,
    fontWeight: "700",
    fontSize: Theme.txtMedium1,
  },
  wrapCvv: {
    width: Theme.wp("40%"),
  },
  viewCVVAndEx: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  txtSubs: {
    color: Theme.red,
    fontWeight: "700",
    fontSize: Theme.txtExtraLarge,
    marginTop: "10%",
    alignSelf: Theme.align,
  },
  txtSub: {
    color: "red",
    fontWeight: "700",
    fontSize: Theme.txtMedium,
    marginTop: "5%",
    // backgroundColor: Theme.txtWhite,
    // padding: 5,
    borderRadius: 10,
    // bottom: 10,
    position: "absolute",
    right: 10,
    top: 2,
    textAlign: Theme.align,
    // width: Theme.wp("20%"),
    // height: Theme.hp("2.5%"),
  },
  btnSubs: {
    color: "red",
    fontWeight: "700",
    fontSize: Theme.txtMedium,
    marginTop: "5%",
    backgroundColor: Theme.txtWhite,
    padding: 5,
    borderRadius: 10,
    bottom: 10,
    position: "absolute",
    right: 2,
    top: 5,
    textAlign: Theme.align,
    width: Theme.wp("20%"),
    height: Theme.hp("2.5%"),
  },
  wrapEmailPass: {
    marginTop: "5%",
  },
  ///////

  txtInput: {
    marginTop: "4%",
  },
  btnLogin: {
    backgroundColor: Theme.primary,
    alignItems: Theme.align,
    justifyContent: Theme.align,
    marginTop: "20%",
    height: Theme.hp("8%"),
  },
  txtLogin: {
    color: Theme.txtWhite,
    fontSize: Theme.txtMedium2,
  },
  txtForgotPass: {
    fontSize: Theme.txtSmall,
    textAlign: Theme.align,
    color: Theme.txtWhite,
    fontWeight: Theme.bold,
  },
  txtNotAccount: {
    marginTop: "5%",
    textAlign: Theme.align,
    color: Theme.txtWhite,
  },
  wrapActIndicator: {
    position: "absolute",
    width: "100%",
    height: "10%",
    marginTop: "100%",
  },
  errorTxt: {
    fontSize: Theme.txtSmallest,
    color: "red",
    // fontWeight: 'bold',
    margin: "2%",
  },
  txtLoading: {
    fontSize: Theme.txtMedium,
    color: Theme.txtWhite,
    margin: "5%",
  },
  flexMarginRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3%",
  },
  widthBorder: {
    borderWidth: 0.5,
    width: "40%",
  },
  txtOr: {
    color: Theme.txtWhite,
    fontSize: Theme.txtMedium,
    fontWeight: Theme.bold,
  },
  width45: {
    width: "45%",
  },
  width100: {
    width: "100%",
  },
  flexJustify: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapPassTxtInp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Theme.white,
    borderRadius: 10,
    height: Theme.hp("7%"),
  },
});

export default styles;
