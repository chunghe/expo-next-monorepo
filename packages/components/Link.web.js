import React from 'react';
import {View} from 'react-native';
import {default as NextLink} from 'next/link';
import {Text, TouchableOpacity} from 'react-native';

export default function Link({
  children,
  xStyle,
  pathname,
  params,
  ...restProps
}) {
  const href = {
    pathname,
    query: params,
  };

  return (
    <View style={xStyle} {...restProps}>
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    </View>
  );
}
