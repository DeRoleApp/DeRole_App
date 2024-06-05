import Input from '@Components/input'
import { View, Text } from 'react-native'
import { StepProps } from 'screens/recover-password'
import { styles } from '../../styles'
import PasswordValidation from '@Components/password-validation'
import ErrorMessage from '@Components/error-message'

const CreatePassword = ({ control, errors }: StepProps) => {
  return (
    <View style={styles.InputsContainer}>
      <PasswordValidation
        control={control}
        errors={errors}
        input={{ name: 'newPassword', placeholder: 'Entre com a nova senha' }}
      />

      <Text style={styles.SubTitle}>confirme a nova senha</Text>
      <Input
        name={'newPasswordConfirmation'}
        placeholder="Confirme a nova senha"
        placeholderTextColor="#fff"
        control={control}
        style={styles.Input}
        rules={{
          required: { value: true, message: '*Campo Obrigatório' },
          validate: (value, inputs) =>
            inputs.newPassword === value || 'As senhas não coincidem',
        }}
      />
      <ErrorMessage error={errors.newPasswordConfirmation} />
    </View>
  )
}

export default CreatePassword
