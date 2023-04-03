import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native-animatable';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from './colors';

const useBackButton = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeftLabelVisible: false,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{marginStart: moderateScale(10)}}
          color="#fff">
          <Image
            source={require('../assets/back.png')}
            style={{
              height: moderateVerticalScale(40),
              width: moderateScale(30),
              tintColor: colors.white,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
};
export default useBackButton;
