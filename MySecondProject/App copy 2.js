import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

export default function MyApp() {
  function getFullName(fname,mName,lName){
    return fname + " " + mName + " " + lName;
  }
  const pet = "Dog";
  return (

      <Text>
        Hello I am  a student in CIS340!{"\n"}
        My full name is {getFullName("Jian","Micah","Cohen")} {"\n"}
        I have a {pet}!
      </Text>
      
  );
}
