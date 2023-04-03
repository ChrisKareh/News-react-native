import {Image} from 'react-native';
import React from 'react';
import {moderateVerticalScale} from 'react-native-size-matters';

export const getFormattedDate = date => {
  return date ? date.split(' ')[0] : '';
};

export const headerLogo = () => (
  <Image
    source={require('../assets/sync-logo.png')}
    style={{
      height: moderateVerticalScale(40),
    }}
    resizeMode="contain"
  />
);
