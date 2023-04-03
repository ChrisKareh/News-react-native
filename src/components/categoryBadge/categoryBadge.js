import {View} from 'react-native';
import React from 'react';
import AppText from '../appText/AppText';
import colors from '../../utils/colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import PropTypes from 'prop-types';

const CategoryBadge = ({
  category,
  inverted,
  width,
  height,
  textStyle,
  bold,
}) => (
  <View
    style={{
      backgroundColor: inverted ? colors.white : colors.primary,
      paddingHorizontal: moderateScale(width),
      paddingVertical: moderateVerticalScale(height),
    }}>
    <AppText
      style={{color: inverted ? colors.primary : colors.white, ...textStyle}}
      bold={bold}>
      {category}
    </AppText>
  </View>
);

CategoryBadge.propTypes = {
  category: PropTypes.string,
  inverted: PropTypes.bool,
  bold: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  textStyle: PropTypes.object,
};

CategoryBadge.defaultProps = {
  inverted: false,
  category: '',
  bold: false,
  width: 10,
  height: 5,
};

export default CategoryBadge;
