import * as React from 'react';
import { Text } from 'react-native';
import Colors from '../constants/Colors';

export default function TabBarLabel({ focused, name }) {
  return focused ? (
    <Text style={{ color: Colors.iconColor }}>{name}</Text>
  ) : null;
}
