import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);
  const onTap = () => setCount(count => count + 1);
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://github.com/jianmcohen/CIS340/blob/main/MySixthProject/assets/logo.png?raw=true"}}
            style={styles.logo}/>

      <Text style={styles.insts}>Pres button to select image on your phone</Text>



      <TouchableOpacity style={styles.button} onPress={()=> AudioListener('You have not selected an image yet')}
      
      
      >
          <Text style={styles.buttonText}>Pick image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFE0"
  },

  button: {
    alignItems: "center",
    backgroundColor: "#778899",
    padding: 10,
    borderRadius: 5
  },
  counterText: {
    alignItems: "center",
    padding: 10
  },
  insts:{
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 10,
    marginBottom: 10,
  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },
  buttonText:{
    fontSize: 20,
    color: "#fff"
  }
});
