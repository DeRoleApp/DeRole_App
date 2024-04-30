import {
  Text,
  View,
  Image,
  StatusBar,
  Alert,
  TouchableHighlight,
} from 'react-native'
import { styles } from './styles'
import { useForm } from 'react-hook-form'
import Input from '../../components/input/input'

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
      <View style={styles.Content}>
        <Image
          source={require('../../../assets/logo-horizontal.webp')}
          style={styles.Logo}
        />
        <Text style={[styles.TextWhite, styles.Title]}>Entrando</Text>
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
          <TouchableHighlight
            activeOpacity={0.5}
            onPress={() =>
              Alert.alert('redirect para tela de recuperaçao de senha')
            }
          >
            <Text style={styles.TextAqua}>Esqueci minha senha</Text>
          </TouchableHighlight>
          <View style={styles.SignUpContent}>
            <Text style={styles.TextWhite}>Não possui uma conta - </Text>
            <TouchableHighlight
              activeOpacity={0.5}
              onPress={() => Alert.alert('redirect para tela de registro')}
            >
              <Text style={styles.TextAqua}>Criar uma conta</Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            onPress={handleSubmit(onSubmit)}
            style={styles.Button}
            underlayColor={'#ffffffce'}
            activeOpacity={0.5}
          >
            <Text style={styles.ButtonText}>Entrar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

export default Login
