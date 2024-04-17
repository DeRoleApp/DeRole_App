import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
//import BlackButton from './Button'; // Importando o componente Button (mexer depois)

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Texto}>Bem-vindo ao De Rolé</Text>

      <Text style={styles.Texto2}>Há muito a ser explorado. Vamos lá!</Text>

      <Image
        source={require('../../../assets/logo.png')}
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
  )
}

export default Login
