import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {screenWidth} from '../../utils/constants';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    height: moderateVerticalScale(200),
    width: screenWidth,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
    tintColor: colors.white,
  },
  topContainer: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateVerticalScale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLeftContainer: {flexDirection: 'row', alignItems: 'center'},
  dateText: {
    marginStart: moderateScale(2),
    color: colors.white,
  },
  bottomContainer: {paddingTop: moderateVerticalScale(10)},
  title: {
    paddingVertical: moderateVerticalScale(5),
    paddingHorizontal: moderateScale(15),
    fontSize: moderateVerticalScale(20),
    lineHeight: moderateVerticalScale(24),
    color: colors.white,
  },
});
