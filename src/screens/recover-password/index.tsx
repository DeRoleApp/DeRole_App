import { StatusBar, View, Text } from 'react-native'
import LoginHeader from '@Components/header/login-header'
import { useForm, Control, FieldErrors } from 'react-hook-form'
import { styles } from './styles'
import Button from '@Components/button'
import { useState } from 'react'
import { router } from 'expo-router'
import AccountVerify from './components/account-verify'
import CodeVerify from './components/code-verify'
import CreatePassword from './components/create-password'

export type StepProps = {
  control: Control
  errors: FieldErrors
}

type Step = 'accountVerify' | 'codeVerify' | 'createNewPassword'

const RecoverPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [step, setStep] = useState<Step>('accountVerify')

  const onSubmit = (data) => {
    const { account, MFACode, newPassword, newPasswordConfirmation } = data

    console.log(data)

    step === 'accountVerify'
      ? setStep('codeVerify')
      : step === 'codeVerify'
        ? setStep('createNewPassword')
        : router.push('/login')
  }

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <LoginHeader />
      <View style={styles.Content}>
        <Text style={styles.Title}>Redefinir senha</Text>

        {step === 'accountVerify' ? (
          <AccountVerify control={control} errors={errors} />
        ) : step === 'codeVerify' ? (
          <CodeVerify control={control} errors={errors} />
        ) : (
          <CreatePassword control={control} errors={errors} />
        )}
        <Button
          onPress={handleSubmit(onSubmit)}
          style={styles.Button}
          activeOpacity={0.5}
          text="Entrar"
        />
      </View>
    </View>
  )
}

export default RecoverPassword
