import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useRoute } from '@react-navigation/native';
import CoinDetail from './CoinDetail';

export default function CoinDetailScreen() {

  const route = useRoute();
  const params = route.params;

  return (
    <CoinDetail params={params}/>
  );
}
