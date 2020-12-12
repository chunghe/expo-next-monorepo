import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Link({children, xStyle, screenName, params, ...restProps}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={xStyle}
      onPress={() => {navigation.navigate(screenName, params)}}
      {...restProps}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
