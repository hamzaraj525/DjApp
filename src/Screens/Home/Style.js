import { StyleSheet, Dimensions } from 'react-native';
import Theme from '../../Utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  txtTitle: {
    fontSize: Theme.txtMedium1,
    color: Theme.txtWhite,
    fontWeight: Theme.bold,
    textAlign: Theme.align,
    margin: '5%',
  },
  txtNoData: {
    color: '#fff',
    fontWeight: '900',
    textAlign: Theme.align,
    paddingVertical: '50%',
    fontSize: 30,
  },
  wrapContent: {
    width: '100%',
  },
  deviderLast: {
    width: Theme.wp('95%'),
    height: 5,
    backgroundColor: Theme.white,
    marginLeft: 10,
    marginBottom: "5%"
  },
  txtName: {
    // color: Theme.white,
    color: 'red',
    fontSize: Theme.txtMedium,
    fontWeight: '900'
  },
  flexJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    marginHorizontal: '2%',
    // borderBottomColor: Theme.white,
    paddingVertical: '2%',
    alignItems: Theme.align,
    backgroundColor: Theme.white,
    borderWidth: 5,
    borderRadius: 10,

  },
  imgPauseBtn: {
    width: Theme.wp('8%'),
    height: Theme.wp('8%'),
  },
  icon: {
    width: 50,
    height: 50,
    paddingTop: 10,
  },
  txtWelcome: {
    color: Theme.white,
    fontWeight: "bold",
    fontSize: Theme.txtLarge,
  },
  row: {
    flexDirection: "row",
  },
  imgSplash: {
    width: Theme.wp("15%"),
    height: Theme.wp("15%"),
    margin: 20,
  },
  logout: {
    position: 'absolute',
    right: '5%',
    marginTop: '10%',
    height: 5
  },
});

export default styles;
