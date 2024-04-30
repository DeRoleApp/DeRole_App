import React from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

const Button= ({ text, onPress}) => {
    return (
            <TouchableOpacity onPress ={onPress}>
                <Text style={styles.text}>{text}</Text>
               
            </TouchableOpacity>    
    )
 }

export default Button

const styles = StyleSheet.create({

    text:{
    fontWeight: 'bold',
    textAlign: 'center',
},

})
