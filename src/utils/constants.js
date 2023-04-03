import {Dimensions, Platform} from 'react-native';

export const baseUrl = 'https://www.almarkazia.com/ar/api';

export const screenNames = {
  home: 'home',
  category: 'category',
  latest: 'latest',
  details: 'details',
};

export const stackNames = {
  home: 'homeStack',
};

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

export const screenWidth = Dimensions.get('screen').width;

export const placeholder =
  'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg';
