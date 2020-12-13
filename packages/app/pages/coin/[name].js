import React from 'react';
import {View, Text} from 'react-native';
import {useRouter} from 'next/router';
import {CoinDetail} from '@shared/components';

// https://github.com/vercel/next-learn-starter/blob/master/dynamic-routes-step-1/pages/posts/%5Bid%5D.js
export default function Coin(props) {
  const router = useRouter();

  return <CoinDetail params={router.query} />;
}

