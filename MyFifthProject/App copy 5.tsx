import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, 
      flexDirection: 'column',
      justifyContent: 'flex-end'}}>
      <View style={{ width: 50, height:50, backgroundColor: 'red'}}/>
      <View style={{ width: 50, height:50, backgroundColor: 'yellow'}}/>
      <View style={{ width: 50, height:50, backgroundColor: 'green'}}/>
  </View>
);
}


