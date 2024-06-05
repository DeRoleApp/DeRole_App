import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  Input: {
    height: 45,
    borderColor: '#fff',
    borderWidth: 1,
    color: '#fff',
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
  },
  Text: {
    color: '#fff',
  },
  ValidatorContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ValidatorIcon: { width: 20, height: 20, marginRight: 15 },
  ErrorMessage: { color: '#ff1313', marginTop: 10 },
})
