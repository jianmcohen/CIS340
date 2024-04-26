import { React } from React;
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

export default function App() {

  const csuLogo={
    uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/02/university-signature.jpeg",
    width: 80,
    height: 80
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={csuLogo} style={styles.image}>

        <Text style={styles.text}> CSU LOGO</Text>
      </ImageBackground>
      
        
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: "row",
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "center"
  },

  text: {
    color: "red",
    fontSize: 50,
    fontWeight: 'bold',

    
  },

  
});
