import React from 'react';
import{ View } from 'react-native';
import {default as NextLink} from 'next/link';
import {Text, TouchableOpacity} from 'react-native';

export default function Link({children, xStyle, href, params, ...restProps}) {
  return (
    <NextLink href={`/${href}`}>
      <View style={xStyle} {...restProps}>
        <Text>{children}</Text>
      </View>
    </NextLink>
  );
}
