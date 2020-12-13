import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import Link from './Link';
import Home from './Home';

export default function HomeScreen() {
  const [coins, setCoins] = useState([]);
  useEffect(async () => {
    const url = 'https://api.github.com/gists/1e93509eb9e78250b5dacc2da86c4eed';
    const res = await fetch(url);
    const json = await res.json();
    setCoins(JSON.parse(json.files['coins.json'].content));
  }, []);

  return <Home coins={coins} />;
}
