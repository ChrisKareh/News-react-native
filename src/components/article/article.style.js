import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  image: {
    width: '100%',
    height: moderateVerticalScale(240),
    marginBottom: moderateVerticalScale(3),
  },
  bodyContainer: {width: '95%', alignSelf: 'center'},
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateVerticalScale(3),
  },
  dateContainer: {flexDirection: 'row'},
  date: {
    color: colors.light_grey,
    marginRight: moderateScale(10),
  },
  share: {
    width: moderateVerticalScale(15),
    height: moderateVerticalScale(15),
    tintColor: colors.light_grey,
  },
  zoomContainer: {
    flexDirection: 'row',
    width: moderateScale(65),
    justifyContent: 'space-between',
  },
  zoomButtonContainer: {
    width: moderateVerticalScale(20),
    height: moderateVerticalScale(20),
    backgroundColor: colors.light_grey,
    borderRadius: moderateVerticalScale(10),
  },
  zoomButton: {
    width: '100%',
    height: '100%',
    tintColor: 'white',
  },
  separator: {
    backgroundColor: colors.primary,
    height: moderateVerticalScale(2),
    marginBottom: moderateVerticalScale(5),
    width: '100%',
  },
  title: {
    lineHeight: moderateVerticalScale(18),
    fontSize: moderateScale(16),
    marginBottom: moderateVerticalScale(30),
  },
  content: {
    fontSize: moderateScale(16),
    color: colors.light_grey,
    lineHeight: moderateVerticalScale(24),
  },
});
