import { FieldValues } from 'react-hook-form'
import { Text } from 'react-native'
import { styles } from './styles'

type ErrorMessageProps = {
  error: FieldValues
  style?: object
}

const ErrorMessage = ({ error, style }: ErrorMessageProps) => {
  return (
    Boolean(error) && (
      <Text style={[styles.ErrorMessage, style]}>{error?.message}</Text>
    )
  )
}

export default ErrorMessage
