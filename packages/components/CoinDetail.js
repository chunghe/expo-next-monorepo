import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CryptoIcon from '@shared/icons';

export default function CoinDetail({params}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Coin Detail, params: {JSON.stringify(params)}</Text>
      <CryptoIcon size={120} name={params.name} />
    </View>
  );
}
