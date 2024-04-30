import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../../components/Buttons'
//import Icon from 'react-native-vector-icons/AntDesign';

export default function App() {

  const handleApplePress = () => {
    alert('Entrando com Apple');
  }

  const handleGooglePress = () => {
    alert('Entrando com Google');
  }

  const handleEntrarPress = () => {
    alert('Entrando');
  }

  const handleCriarPress = () => {
    alert('Criando Conta');
  }
  const handleContinuarPress = () => {
    alert ('Continuar sem Login')
  }


  return (

 <View style={styles.container}>

  
      <Text style = {styles.continuar} onPress={handleContinuarPress}> Continuar sem login</Text>
  
  

      <Text style={styles.Texto}>Bem-vindo ao De Rolé</Text>

      <Text style={styles.Texto2}>Há muito a ser explorado. Vamos lá?</Text>

      <Image
        source={require('/Users/mariacmpv/DeRole_App/assets/logo.png')}
        style={styles.backgroundImage}
      />

      <Text style={styles.Texto3}>
        Como deseja continuar?
      </Text>

<View>

        <View style={styles.apple}>
              <Button text="Continuar com Apple" onPress={handleApplePress} />
             
        </View>
      

       <View style = {styles.google}>
          <Button text="Continuar com Google" onPress={handleGooglePress} />  
          {/* <AntDesign name="google" size={24} color="black" /> */}
      </View>
</View>

  
  <View style={styles.linhaContainer}>

    <View style={styles.linha}></View>
      <Text style ={styles.ou}>ou</Text>
    <View style={styles.linha}></View>

  </View>
  


<View style={styles.buttonContainer}>

        <View style={styles.button}>
              <Button text="Entrar" onPress={handleEntrarPress} />
        </View>
      

       <View style ={styles.button}>
          <Button text="Criar Conta" onPress={handleCriarPress} />  
      </View>
</View>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

continuar:{
fontSize:16,
color:'#0097D9',
marginLeft: 160,
bottom: 20,
},
  Texto: {
    fontSize: 30,
    color: '#FFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:10,
  },

  Texto2: {
    fontSize: 16,
    color: '#FFFF',
    textAlign: 'center',
    marginBottom: 200, 
  
  },

  Texto3: {
    fontSize: 13,
    textAlign: 'center',
    color: '#FFFF',
    left: '2%',
    marginBottom:20,
    top:-100

  },

  backgroundImage: {
  width:138,
  height:200,
  marginBottom:20,
  top: -150
},

apple:{
  backgroundColor: '#FFFF',
  width: 320,
  height: 43,
  top:-100,
  marginBottom: 10,
  alignContent: 'center',
  borderRadius: 10,
},

google:{
  backgroundColor: '#FFFF',
  width: 320,
  height: 43,
  top:-100,
  marginBottom: 10,
  justifyContent: 'center',
  alignContent: 'center',
  borderRadius: 10,
},

buttonContainer:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: 320,
  height:43,
  
},

button: {
  flex: 1,
  marginHorizontal:5,
  backgroundColor: '#FFFF',
  borderRadius: 10,
  justifyContent: 'center',
  top:-70
},

linhaContainer:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
  width: '80%'
},

linha:{
  flex:1,
  height: 1, 
  backgroundColor: '#C0C0C0',
  bottom: 80,
},

ou:{
color:'#FFFF',
marginHorizontal: 10,
bottom: 90,
}

});
