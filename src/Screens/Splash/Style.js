import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: Theme.align,
    backgroundColor: Theme.primary,
    justifyContent: Theme.align,
  },
  imgSplash: {
    width: Theme.wp('60%'),
    height: Theme.wp('60%'),
  },
});

export default styles;
