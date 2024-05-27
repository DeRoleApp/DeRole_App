import { Text, View, StatusBar, Alert, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useForm } from 'react-hook-form'
import Input from '@Components/input'
import Button from '@Components/button'
import LoginHeader from '@Components/header/login-header'
import { router } from 'expo-router'

type SubmitDataProps = { email: string; password: string }

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: SubmitDataProps) => {
    const { email, password } = data

    Alert.alert(email, password)
  }

  return (
    <View style={styles.Container}>
      <StatusBar barStyle="light-content" />
      <LoginHeader />
      <View style={styles.Content}>
        <Text style={[styles.TextWhite, styles.Title]}>Login</Text>
        <View style={styles.InputsContainer}>
          <Input
            name={'email'}
            placeholder="E-mail ou celular"
            placeholderTextColor="#fff"
            control={control}
            style={styles.Input}
            rules={{ required: true }}
          />
          {Boolean(errors?.email?.type === 'required') && (
            <Text style={styles.ErrorMessage}>*Email Obrigatório</Text>
          )}
          <Input
            name={'password'}
            placeholder="Senha"
            placeholderTextColor="#fff"
            control={control}
            style={styles.Input}
            secureTextEntry
            rules={{ required: true }}
          />
          {Boolean(errors?.password?.type === 'required') && (
            <Text style={styles.ErrorMessage}>*Senha Obrigatória</Text>
          )}
        </View>
        <View style={styles.OptionsContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => router.push('/recover-password')}
          >
            <Text style={styles.TextAqua}>Esqueci minha senha</Text>
          </TouchableOpacity>
          <View style={styles.SignUpContent}>
            <Text style={styles.TextWhite}>Não possui uma conta - </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => Alert.alert('redirect para tela de registro')}
            >
              <Text style={styles.TextAqua}>Criar uma conta</Text>
            </TouchableOpacity>
          </View>
          <Button
            onPress={handleSubmit(onSubmit)}
            style={styles.Button}
            activeOpacity={0.5}
            text="Entrar"
          />
        </View>
      </View>
    </View>
  )
}

export default Login
