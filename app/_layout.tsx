import { Slot } from 'expo-router'
import { SafeAreaView, View } from 'react-native'

const RootLayout = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}
    >
      <View style={{ padding: 30 }}>
        <Slot />
      </View>
    </SafeAreaView>
  )
}

export default RootLayout
