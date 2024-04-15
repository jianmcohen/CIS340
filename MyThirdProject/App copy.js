import { StatusBar } from 'expo-status-bar';
import {  Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hi my name is {props.name}, I am a student in CIS340!</Text>
      
    </View>
  );
}
export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Welcome to cis340</Text>
      <Student name= "Jian Cohen"/>
      <Student name= "Jon Boh"/>
      <Student name= "Kinder Hekn"/>
      <Student name= "Seth Roland"/>
    </View>
  );
}


