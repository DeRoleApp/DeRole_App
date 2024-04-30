import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native'

const RootLayout = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}
    >
      <Slot />
    </SafeAreaView>
  )
}

export default RootLayout
