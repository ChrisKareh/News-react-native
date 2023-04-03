import {StyleSheet} from 'react-native';
import {isAndroid, screenWidth} from '../../utils/constants';
import colors from '../../utils/colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

export default StyleSheet.create({
  container: (isGroup, fullScreen) => ({
    direction: 'rtl',
    flexDirection: isGroup ? 'column' : isAndroid ? 'row' : 'row-reverse',
    backgroundColor: colors.white,
    width: isGroup
      ? screenWidth / 2 - moderateScale(fullScreen ? 2.5 : 10)
      : screenWidth - moderateScale(15),
    height: moderateVerticalScale(isGroup ? 180 : 90),
    alignSelf: 'center',
    marginBottom: moderateVerticalScale(isGroup ? 0 : 5),
  }),
  imageContainer: isGroup => ({
    flex: isGroup ? 0.55 : 0.3,
  }),
  image: {width: '100%', height: '100%'},
  fractionContainer: (takeFullWidth, isGroup) => ({
    flex: isGroup ? 0.45 : takeFullWidth ? 0.7 : 1,
    justifyContent: 'space-between',
    padding: moderateScale(isGroup ? 0 : 5),
    paddingHorizontal: moderateScale(isGroup ? 2 : 5),
  }),
  title: {
    textAlign: isAndroid ? 'right' : 'left',
    color: colors.primary,
    fontSize: moderateScale(15),
    lineHeight: moderateVerticalScale(20),
  },
  infoContainer: {
    flexDirection: isAndroid ? 'row-reverse' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: moderateScale(15),
    height: moderateScale(15),
    tintColor: colors.primary,
  },
  date: isGroup => ({
    textAlign: 'left',
    color: colors.primary,
    fontSize: moderateScale(isGroup ? 10 : 12),
  }),
});
