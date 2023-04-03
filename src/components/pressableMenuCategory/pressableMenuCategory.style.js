import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: selected => ({
    paddingVertical: moderateVerticalScale(7),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(4),
    margin: moderateScale(8),
    backgroundColor: selected ? colors.light_grey + '44' : 'transparent',
  }),
  item: {
    color: colors.white,
    fontSize: moderateScale(20),
    textAlign: 'right',
  },
});
