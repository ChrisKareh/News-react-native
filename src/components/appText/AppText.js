/* eslint-disable react-native/no-inline-styles */
import {Text} from 'react-native';
import React from 'react';

const AppText = ({children, bold, ...props}) => (
  <Text
    {...props}
    style={{
      fontFamily: bold ? 'JFFlat-Bold' : 'JFFlat-Regular',
      textAlign: 'right',
      ...props.style,
    }}>
    {children}
  </Text>
);
export default AppText;
