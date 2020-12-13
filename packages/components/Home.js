import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import Link from './Link';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
  },
  item: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});


export default function Home({coins}) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={coins}
        keyExtractor={item => item}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={({item}) => (
          <Link
            screenName="CoinDetail"
            pathname="/coin/[name]"
            xStyle={styles.item}
            params={{name: item}}>
            <Text>{item}</Text>
          </Link>
        )}
      />
    </SafeAreaView>
  );
}
