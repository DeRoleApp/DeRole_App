import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
    transform: [{ translateX: 0 }, { translateY: 55 }],
  },
})
