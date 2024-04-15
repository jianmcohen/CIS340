import { StatusBar } from 'expo-status-bar';
import {  Text, Image, View } from 'react-native';

export default function MyDog() {
  let pic = {uri:"https://drive.google.com/file/d/173_smRu-4eSd7lWWOr9Do9qdTFuIB7Vb/view?usp=drive_link"}
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'

    }}>
      <Image source ={pic}
      style={{width: 200, height: 200}}
      />
      <Text>Hello I am your dog!</Text>
    </View>
  );
}