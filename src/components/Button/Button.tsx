import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { buttonstyle } from './Button.style'

type Props = {
    text: string,
    onPress:  ()=>void,
    loading?:boolean
}

const Button = (props: Props) => {
  return (
       <TouchableOpacity style={ buttonstyle.container } onPress={ props.onPress }>
      {props.loading ? <ActivityIndicator color="gray"/> :  <Text style={ buttonstyle.title } >{ props.text }</Text>}
         
    </TouchableOpacity>
  )
}

export default Button