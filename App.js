import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//import BlackButton from './Button'; // Importando o componente Button (mexer depois)

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.Texto}>Bem-vindo ao De Rolé</Text>

      <Text style={styles.Texto2}>Há muito a ser explorado. Vamos lá!</Text>

      <Image
        source={require('../AppProject/assets/logo.png')}
        style={styles.backgroundImage}
      />

      <Text style={styles.Texto3}>
        Eu concordo com os Termos de Serviço da De Rolé e {'\n'}
        confirmo que li a Política de Privacidade De Rolé.
      </Text>
      
      {/* Para adc os botões, dps precisa configurar pelo arquivo "buttons.js"
      <BlackButton onPress={() => {}} title="Continue com Google" />
      <BlackButton onPress={() => {}} title="Fazer Login" />
      <BlackButton onPress={() => {}} title="Criar Conta" /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Texto: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    top: -300,
  },

  Texto2: {
    fontSize: 15,
    textAlign: 'center',
    top: -275,
    left: '1%',
  },

  Texto3: {
    fontSize: 10,
    textAlign: 'center',
    top: 150,
    left: '2%',
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundImage: {
    position: 'absolute',
    top: '20%', 
    left: '23%', 
    width: '60%', 
    height: '40%', 
    transform: [
      { translateX: 0}, 
      { translateY: 55}, 
    ],
  },
});
