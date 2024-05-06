import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {

  const[ selectedImage, setSelectedImage ] = React.useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false){
      alert("Permission is required");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if(pickerResult.canceled===true){
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri});
    
  };

  let openSharingDialogAsync = async () =>{
    if (!(await Sharing.isAvailableAsync())){
      alert('Sharing is not available')
    }
    Sharing.shareAsync(selectedImage.localUri);
  };


  if(selectedImage !== null){
    return(
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.uri}} style={styles.selImage}/>

        <TouchableOpacity onPress={openSharingDialogAsync} style={styles.button}>

          <Text style={styles.buttonText}> Share my photo </Text>
        </TouchableOpacity>

      </View>
    )
  }


  return (
    <View style={styles.container}>
      <Image source={{uri: "https://github.com/jianmcohen/CIS340/blob/main/MySixthProject/assets/logo.png?raw=true"}}
            style={styles.logo}/>

      <Text style={styles.insts}>Pres button to select image on your phone</Text>



      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}
      
      
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
  },

  selImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
});
