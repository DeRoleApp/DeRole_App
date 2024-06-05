import { View, Text } from 'react-native'
import Input from '@Components/input'
import { EmailAndPhoneRegex } from '@Shared/helpers'
import { styles } from '../../styles'
import { StepProps } from '../..'

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
          required: true,
          pattern: {
            value: EmailAndPhoneRegex,
            message: 'Formato inválido. Deve ser um email ou telefone.',
          },
        }}
      />
      {Boolean(errors) && Boolean(errors?.account?.type === 'required') ? (
        <Text style={styles.ErrorMessage}>*Campo Obrigatório</Text>
      ) : (
        <Text style={styles.ErrorMessage}>
          {errors?.account?.message as string}
        </Text>
      )}
    </View>
  )
}

export default AccountVerify
