import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function CoinDetail({params}) {
  return (
    <View>
      <Text>Coin Detail, params: {JSON.stringify(params)}</Text>
    </View>
  );
}
