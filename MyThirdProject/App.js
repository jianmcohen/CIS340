import React, { useState } from 'react';
import {  Text, Button, View } from 'react-native';

function TV(props) {
  const [isOff, setIsOff] = useState(true);
  return(
  <View>
    {"\n\n\n\n"}
    <Text>
      this is {props.name} TV and it is {isOff ? "OFF" : "Turned me on"}
    </Text>
    <Button
      onPress={()=> {
        setIsOff(false);
      }}
      disabled = {!isOff}
      title={isOff ? "Turn me on Please" : "Thank you"}
    />
  </View>
);

}