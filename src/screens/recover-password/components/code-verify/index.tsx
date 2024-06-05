import { View, TouchableOpacity, Text } from 'react-native'
import { StepProps } from '../..'
import Input from '@Components/input'
import { styles } from '../../styles'

const CodeVerify = ({ control, errors }: StepProps) => {
  return (
    <View>
      <View style={styles.SubTitleContainerCentralized}>
        <Text style={styles.SubTitle}>Informe o código recebido por email</Text>
      </View>
      <Input
        name={'MFACode'}
        placeholder="codigo"
        placeholderTextColor="#fff"
        control={control}
        style={styles.Input}
        rules={{ required: true }}
      />
      {Boolean(errors?.MFACode?.type === 'required') && (
        <Text style={styles.ErrorMessage}>*Campo Obrigatório</Text>
      )}
      <View style={styles.complementTextContainer}>
        <Text style={styles.Text}>
          Verifique a caixa de entrada do e-mail informado e insira o código no
          campo a acima.
        </Text>
        <View style={styles.ComplementTextContent}>
          <Text style={styles.Text}>Caso não tenha recebido o código - </Text>
          <TouchableOpacity onPress={() => alert('reenviar codigo')}>
            <Text style={styles.ResendCode}>Reenviar código</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CodeVerify
