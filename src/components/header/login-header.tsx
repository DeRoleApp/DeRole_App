import { View, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { router } from 'expo-router'

const LoginHeader = () => {
  const handleBackButton = () => {
    router.back()
  }

  return (
    <View style={styles.LoginAreaContainer}>
      <TouchableOpacity
        onPress={handleBackButton}
        style={styles.BackButtonContainer}
      >
        <Image
          source={require('../../../assets/arrow-left.png')}
          style={styles.BackButton}
        />
      </TouchableOpacity>
      <Image
        source={require('../../../assets/logo-horizontal.webp')}
        style={styles.Logo}
      />
    </View>
  )
}

export default LoginHeader
