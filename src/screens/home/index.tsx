import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Image } from 'react-native'
import Button from '../../components/button'
import { styles } from './styles'
import { router } from 'expo-router'

const Home = () => {
  const handleApplePress = () => {
    alert('Entrando com Apple')
  }

  const handleGooglePress = () => {
    alert('Entrando com Google')
  }

  const handleEntrarPress = () => {
    router.push('/login')
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
        Continuar sem login
      </Text>

      <Text style={styles.Texto}>Bem-vindo ao De Rolé</Text>

      <Text style={styles.Texto2}>Há muito a ser explorado. Vamos lá?</Text>

      <Image
        source={require('../../../assets/logo.png')}
        style={styles.backgroundImage}
      />

      <Text style={styles.Texto3}>Como deseja continuar?</Text>

      <View>
        <Button
          style={styles.socialButton}
          activeOpacity={0.5}
          text="Continuar com Apple"
          onPress={handleApplePress}
        />

        <Button
          style={styles.socialButton}
          activeOpacity={0.5}
          text="Continuar com Google"
          onPress={handleGooglePress}
        />
      </View>

      <View style={styles.linhaContainer}>
        <View style={styles.linha}></View>
        <Text style={styles.ou}>ou</Text>
        <View style={styles.linha}></View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          activeOpacity={0.5}
          text="Entrar"
          onPress={handleEntrarPress}
        />

        <Button
          style={styles.button}
          activeOpacity={0.5}
          text="Criar Conta"
          onPress={handleCriarPress}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  )
}

export default Home
