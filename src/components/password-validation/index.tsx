import Input from '@Components/input'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { Control, FieldErrors, useWatch } from 'react-hook-form'
import {
  PasswordValidationRegex,
  specialCharacterRegex,
  upperCaseRegex,
} from '@Shared/helpers'
import ErrorMessage from '@Components/error-message'

type PasswordValidationProps = {
  control: Control
  errors: FieldErrors
  input: { name: string; placeholder: string }
}

type ValidatorProps = {
  text: string
  isValidate: boolean
}

const minCharacter = 8 as const

const Validator = ({ text, isValidate }: ValidatorProps) => {
  const validatorIconPath = isValidate
    ? require('../../../assets/check-green.webp')
    : require('../../../assets/wrong-red.webp')

  return (
    <View style={styles.ValidatorContainer}>
      <Image source={validatorIconPath} style={styles.ValidatorIcon} />

      <Text style={styles.Text}>{text}</Text>
    </View>
  )
}

const PasswordValidation = ({
  control,
  errors,
  input,
}: PasswordValidationProps) => {
  const newPassword = useWatch({ control: control, name: input.name })

  const hasUppercase = upperCaseRegex?.test(newPassword)
  const hasSpecialCharacter = specialCharacterRegex?.test(newPassword)
  const hasMinCharacterLength = newPassword?.length >= minCharacter

  return (
    <>
      <Input
        name={input.name}
        placeholder={input.placeholder}
        placeholderTextColor="#fff"
        control={control}
        style={styles.Input}
        rules={{
          required: { value: true, message: '*Campo Obrigatório' },
          pattern: {
            value: PasswordValidationRegex,
            message: 'Os requisitos devem ser atendidos.',
          },
        }}
      />
      <ErrorMessage error={errors[input.name]} />

      <View style={{ marginTop: 20 }}>
        <Validator
          text="Tem pelo menos uma letra maiúscula"
          isValidate={hasUppercase}
        />
        <Validator
          text="Contém um caractere especial"
          isValidate={hasSpecialCharacter}
        />
        <Validator
          text="Tem pelo menos 8 caracteres"
          isValidate={hasMinCharacterLength}
        />
      </View>
    </>
  )
}

export default PasswordValidation
