import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  Content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextWhite: {
    color: '#fff',
  },
  Title: {
    fontSize: 25,
  },
  InputsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 40,
  },
  Input: {
    height: 45,
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1,
    color: '#fff',
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
  },
  OptionsContainer: {
    width: '100%',
  },

  TextAqua: {
    color: '#00B2FF',
  },
  SignUpContent: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  Button: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 40,
    borderRadius: 5,
    padding: 10,
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
