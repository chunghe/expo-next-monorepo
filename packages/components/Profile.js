import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Profile(props) {
  console.log('props', props);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}
