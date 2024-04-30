import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Image } from 'react-native'
import Button from '../../components/Buttons'
import { styles } from './styles'

export default function App() {
  const handleApplePress = () => {
    alert('Entrando com Apple')
  }

  const handleGooglePress = () => {
    alert('Entrando com Google')
  }

  const handleEntrarPress = () => {
    alert('Entrando')
  }

  const handleCriarPress = () => {
    alert('Criando Conta')
  }
  const handleContinuarPress = () => {
    alert('Continuar sem Login')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.continuar} onPress={handleContinuarPress}>
        {' '}
        Continuar sem login
      </Text>

      <Text style={styles.Texto}>Bem-vindo ao De Rolé</Text>

      <Text style={styles.Texto2}>Há muito a ser explorado. Vamos lá?</Text>

      <Image
        source={require('/Users/mariacmpv/DeRole_App/assets/logo.png')}
        style={styles.backgroundImage}
      />

      <Text style={styles.Texto3}>Como deseja continuar?</Text>

      <View>
        <View style={styles.apple}>
          <Button text="Continuar com Apple" onPress={handleApplePress} />
        </View>

        <View style={styles.google}>
          <Button text="Continuar com Google" onPress={handleGooglePress} />
          {/* <AntDesign name="google" size={24} color="black" /> */}
        </View>
      </View>

      <View style={styles.linhaContainer}>
        <View style={styles.linha}></View>
        <Text style={styles.ou}>ou</Text>
        <View style={styles.linha}></View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button text="Entrar" onPress={handleEntrarPress} />
        </View>

        <View style={styles.button}>
          <Button text="Criar Conta" onPress={handleCriarPress} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  )
}
