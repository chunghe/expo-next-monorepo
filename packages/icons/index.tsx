import React from 'react';
import {default as Btc} from './Btc';
import {default as Eth} from './Eth';
import {default as Ltc} from './Ltc';

const mapping = {
  BTC: Btc,
  ETH: Eth,
  LTC: Ltc,
};

export default function CryptoIcons({name, ...restProps}) {
  const Comp = mapping[name];

  if (Comp) {
    return <Comp {...restProps} />;
  }
  return null
}
