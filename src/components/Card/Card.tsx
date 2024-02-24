import { View, Text, Image, TouchableOpacity, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import React from 'react'
import {card} from "./Card.style"
type Props = {
  id:number,
  name: string,
  imageUrl : string,
  onClick: () => void,
  description?: string,
  shippingMethod?: string,
  price?: string,
  imageStyle?: ImageStyle,
  viewStlye?: ViewStyle,
  descriptionStyle?: ViewStyle,
  desctextStyle?:TextStyle
}

const Card = (props: Props) => {

  return (
    <TouchableOpacity key={props.id} style={[card.container, props.viewStlye]} onPress={props.onClick}>
      <View style={{flexDirection:"column"}}>
      <Text style={card.name}>{props.name}</Text>
        <Image source={{ uri: props.imageUrl }} style={[props.imageStyle, card.image]} />
        </View>
      {props.description ? (
        <View style={props.descriptionStyle}>
          <Text style={props.desctextStyle}>{ props.description}.</Text>
          <Text >{ props.shippingMethod}   { props.price}  TL</Text>
          <Text style={props.desctextStyle}>Favorilere Ekemek İçin Tıkla </Text>
        </View>
      ):(null)}
    </TouchableOpacity>
  )
}

export default Card