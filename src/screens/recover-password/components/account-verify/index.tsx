import { View, Text } from 'react-native'
import Input from '@Components/input'
import { EmailAndPhoneRegex } from '@Shared/helpers'
import { styles } from '../../styles'
import { StepProps } from '../..'
import ErrorMessage from '@Components/error-message'

const AccountVerify = ({ control, errors }: StepProps) => {
  return (
    <View style={styles.InputsContainer}>
      <Input
        name={'account'}
        placeholder="E-mail ou celular"
        placeholderTextColor="#fff"
        control={control}
        style={styles.Input}
        rules={{
          required: { value: true, message: '*Campo Obrigatório' },
          pattern: {
            value: EmailAndPhoneRegex,
            message: 'Formato inválido. Deve ser um email ou telefone.',
          },
        }}
      />
      <ErrorMessage error={errors.account} />
    </View>
  )
}

export default AccountVerify
