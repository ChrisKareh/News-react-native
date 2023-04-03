import {StyleSheet} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../utils/colors';

export default StyleSheet.create({
  sliderIndicatorBackground: {
    height: moderateVerticalScale(10),
    backgroundColor: colors.light_grey,
  },
  indicatorStyle: {
    width: moderateVerticalScale(10),
    zIndex: 1,
    borderRadius: 0,
    backgroundColor: colors.primary,
  },
});
