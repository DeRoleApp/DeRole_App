import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './style'

type ButtonProps = TouchableOpacityProps & {
  text: string
}

const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
