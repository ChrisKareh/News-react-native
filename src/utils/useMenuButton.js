import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native-animatable';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from './colors';

const useMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            setIsOpen(prevState => !prevState);
          }}
          style={{marginEnd: moderateScale(10)}}
          color="#fff">
          <Image
            source={require('../assets/menu.png')}
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
  }, [navigation, setIsOpen]);
  return {isOpen, setIsOpen};
};
export default useMenuButton;
