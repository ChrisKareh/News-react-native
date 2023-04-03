import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {screenNames} from '../utils/constants';
import HomeScreen from '../screens/homeScreen';
import LatestNewsScreen from '../screens/latestNewsScreen';
import colors from '../utils/colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import withSideMenu from '../utils/withSideMenu';

const Tab = createMaterialTopTabNavigator();

const TabWithMenu = withSideMenu(Tab.Navigator, true);

const TabNavigator = () => {
  return (
    <TabWithMenu
      screenOptions={{
        tabBarLabelStyle: {
          color: colors.white,
          fontFamily: 'JFFlat-Bold',
          fontSize: moderateScale(17),
        },
        tabBarStyle: {backgroundColor: colors.primary},
        tabBarIndicatorStyle: {
          backgroundColor: colors.white,
          height: moderateVerticalScale(5),
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'الرئسية',
        }}
        name={screenNames.home}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'أخر الأخبار',
        }}
        name={screenNames.latest}
        component={LatestNewsScreen}
      />
    </TabWithMenu>
  );
};

export default TabNavigator;
