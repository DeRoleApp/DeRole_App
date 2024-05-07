import { Control, Controller } from 'react-hook-form'
import { TextInput, TextInputProps } from 'react-native'

type InputProps = TextInputProps & {
  name: string
  control: Control
  rules?: object
}

const Input = ({ name, control, rules, ...props }: InputProps) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        placeholder={name}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        {...props}
      />
    )}
  />
)

export default Input