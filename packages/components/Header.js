import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Link from 'next/link';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  linkItem: {
    marginHorizontal: 20
  }
});

function LinkItem({title, href}) {
  return (
    <View style={styles.linkItem}>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </View>
  )
}

export default function Header() {
  return (
    <View style={styles.row}>
      <LinkItem href="/" title="Home" />
      <LinkItem href="/profile" title="Profile" />
    </View>
  );
}
