import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../Utils/Theme';
const styles = StyleSheet.create({
  modalWrap: {
    flex: 1,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  imgLogo: {
    width: Theme.wp('60%'),
    height: Theme.wp('60%'),
  },
  txtLoading: {
    fontSize: Theme.txtMedium,
    color: Theme.txtWhite,
    margin: '5%',
  },
  indic: {
    margin: '5%',
  },
});

export default styles;
