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
  Title: {
    color: '#fff',
    fontSize: 25,
  },
  SubTitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
  },
  SubTitleContainerCentralized: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Text: {
    color: '#fff',
  },
  complementTextContainer: { marginTop: 20 },
  ComplementTextContent: { display: 'flex', flexDirection: 'row' },
  ResendCode: { color: '#00B2FF', marginTop: 1 },
  InputsContainer: {
    width: '100%',
  },
  Input: {
    height: 45,
    borderColor: '#fff',
    borderWidth: 1,
    color: '#fff',
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
  },
  ErrorMessage: { color: '#ff1313', marginTop: 10 },
  OptionsContainer: {
    width: '100%',
  },
  TextAqua: {
    color: '#00B2FF',
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
