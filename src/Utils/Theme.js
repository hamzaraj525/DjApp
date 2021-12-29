import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Theme = {
  red: "#f7021b",
  green: "#02d41b",
  primary: "#000000",
  secondary: "#ADA821",
  gold: "#ada11f",
  txtWhite: "#ffffff",
  txtBlue: "blue",
  lightGrey: "#f0f1f2",
  placeholderCol: "grey",
  white: "white",
  blue: "#5978ff",
  black: "black",
  txtBlack: "black",
  iconCol: "#D1D1D1",
  iconSize: 26,
  iconSizeLarge: 35,
  iconSizeSm: 18,
  iconSizeExSm: 12,
  bold: "bold",
  errorColor: "red",
  txtSmallest: hp("1.5%"),
  txtSmall: hp("1.7%"),
  txtMedium: hp("2%"),
  txtMedium1: hp("2.5%"),
  txtLarge: hp("3%"),
  txtExtraLarge: hp("4%"),
  align: "center",
  wp,
  hp,
  width: wp("95%"),
};

export default Theme;
