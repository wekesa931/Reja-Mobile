import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons'
// import Icon from 'react-native-vector-icons/Ionicons';

// @ts-ignore
const CustomHeaderButton = props => {
  return (
    // @ts-ignore
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={props.color}
    />
  );
};

export default CustomHeaderButton;