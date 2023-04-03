import React from 'react';
import {isIos, screenNames, stackNames} from '../utils/constants';
import TabNavigator from './topTabNavigation';
import colors from '../utils/colors';
import {moderateVerticalScale} from 'react-native-size-matters';
import ArticleDetailsScreen from '../screens/articleDetailsScreen';
import {headerLogo} from '../utils/common';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryScreen from '../screens/categoryScreen';

const Stack = createStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={stackNames.home}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0,
          shadowOpacity: 0,
          height: moderateVerticalScale(isIos ? 90 : 60),
        },

        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{
          headerTitle: headerLogo,
        }}
        name={stackNames.home}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{
          headerTitle: headerLogo,
        }}
        name={screenNames.details}
        component={ArticleDetailsScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: headerLogo,
        }}
        name={screenNames.category}
        component={CategoryScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default AppNavigation;
