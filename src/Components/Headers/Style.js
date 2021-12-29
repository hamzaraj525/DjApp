import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../Utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.white,
  },

  headerWrap: {
    backgroundColor: Theme.primary,
    flexDirection: 'row',
    alignItems: Theme.align,
    // justifyContent: 'space-between',
    padding: '2%',
  },
  imgStyle: {
    borderRadius: 90,
    height: Theme.wp('15%'),
    width: Theme.wp('15%'),
  },
  imgStyle1: {
    width: Theme.wp('45%'),
    height: Theme.wp('45%'),
  },
  txtLabel: {
    paddingLeft: '2%',
    color: Theme.txtWhite,
    fontWeight: Theme.bold,
  },
  flexJustify: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flecBgHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Theme.primary,
    padding: '3%',
    alignItems: Theme.align,
  },
  txtLabel: {
    fontSize: Theme.txtMedium,
    fontWeight: Theme.bold,
    color: Theme.txtWhite,
  },
  alignHeader: {
    width: '100%',
    backgroundColor: Theme.primary,
    padding: '3%',
    alignItems: Theme.align,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
