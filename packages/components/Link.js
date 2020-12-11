import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Link({children, xStyle, href, params, ...restProps}) {
  const navigation = useNavigation();
  console.log('params', params);
  return (
    <TouchableOpacity
      style={xStyle}
      onPress={() => {navigation.navigate(href, params)}}
      {...restProps}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
