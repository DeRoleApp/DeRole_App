import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  continuar: {
    fontSize: 16,
    color: '#0097D9',
    marginLeft: 160,
    bottom: 20,
  },
  Texto: {
    fontSize: 30,
    color: '#FFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
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
    marginBottom: 20,
    top: -100,
  },

  backgroundImage: {
    width: 138,
    height: 200,
    marginBottom: 20,
    top: -150,
  },

  apple: {
    backgroundColor: '#FFFF',
    width: 320,
    height: 43,
    top: -100,
    marginBottom: 10,
    alignContent: 'center',
    borderRadius: 10,
  },

  google: {
    backgroundColor: '#FFFF',
    width: 320,
    height: 43,
    top: -100,
    marginBottom: 10,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    height: 43,
  },

  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#FFFF',
    borderRadius: 10,
    justifyContent: 'center',
    top: -70,
  },

  linhaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    width: '80%',
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: '#C0C0C0',
    bottom: 80,
  },

  ou: {
    color: '#FFFF',
    marginHorizontal: 10,
    bottom: 90,
  },
})
