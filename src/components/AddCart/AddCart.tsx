import {  Text } from 'react-native'
import React from 'react'
import { addcartstyle } from './AddCart.style'
import { Ionicons } from '@expo/vector-icons'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
    onClick?:()=>void
}

const AddCart = (props: Props) => {
  return (
      <TouchableOpacity style={addcartstyle.container} onPress={props.onClick} >
    
               <Ionicons name='add' style={addcartstyle.icon} size={heightPercentageToDP(3)}/>
      <Text style={addcartstyle.text}>Add Cart</Text>
        
    </TouchableOpacity>
  )
}

export default AddCart