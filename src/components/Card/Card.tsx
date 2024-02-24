import { View, Text, Image, TouchableOpacity, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import {card} from "./Card.style"
import AsyncStorage from '@react-native-async-storage/async-storage'
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
  desctextStyle?: TextStyle,
  checkFav?: () => void,
  isFav?:boolean
}

const Card = (props: Props) => {
   const [isFav, setIsFav] = useState<boolean>(false);
  useEffect(() => {
   const checkFavourite = async ({ id }: { id: number }) => {
      
    try {
      const favourites = await AsyncStorage.getItem("favourites");
 

      if (favourites !== null) {
        const parsedFavourites: any[] = JSON.parse(favourites);
    
        setIsFav(parsedFavourites.some((product) => product.id === id));
        console.log(parsedFavourites.some((product) => product.selecteditem.id === id))
      }
    } catch (error) {
      console.error("Error retrieving favourites from AsyncStorage: ", error);
    }
    };
    checkFavourite({id:props.id});

},[])
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
          <Text style={props.desctextStyle}>{isFav? "Favoride" : "Favorilere Eklemek İçin Tıkla"} </Text>
        </View>
      ):(null)}
    </TouchableOpacity>
  )
}

export default Card