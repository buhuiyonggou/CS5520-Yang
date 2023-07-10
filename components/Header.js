import { View, Text } from 'react-native'
import React from 'react'

// receive props from App.js
export default function Header({title, name}) {
  return (
    <View>
      <Text>Welcome to {title} {name}</Text>
    </View>
  );
}