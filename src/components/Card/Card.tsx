import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {card} from "./Card.style"
type Props = {
  id:number,
  name: string,
  imageUrl : string,
  onClick:()=>void
}

const Card = (props: Props) => {

  return (
    <TouchableOpacity key={props.id} style={card.container} onPress={props.onClick}>
      <Text style={card.name}>{props.name}</Text>
      <Image source={{uri:props.imageUrl}} style={card.image} />
    </TouchableOpacity>
  )
}

export default Card