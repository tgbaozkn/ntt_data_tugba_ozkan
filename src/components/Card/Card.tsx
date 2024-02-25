import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from "react-native";
import React, { useEffect, useState } from "react";
import { card } from "./Card.style";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Ionicons } from "@expo/vector-icons";
import { heightPercentageToDP } from "react-native-responsive-screen";
type Props = {
  id: number;
  name: string;
  imageUrl: string;
  onClick: () => void;
  description?: string;
  shippingMethod?: string;
  price?: string;
  imageStyle?: ImageStyle;
  viewStlye?: ViewStyle;
  descriptionStyle?: ViewStyle;
  desctextStyle?: TextStyle;
  checkFav?: () => void;
  isFav?: boolean;
  inFav?: boolean;
  isAddCart?: boolean;
  AddCartComp?: JSX.Element[] | JSX.Element; //children ekleme
  isCart?: boolean;
  increment?: () => void;
  decrement?: () => void;
  deleteCartItem?: () => void;
  piece?: number;
};

const Card = (props: Props) => {
  const [isFav, setIsFav] = useState<boolean>(false);
  const [piece, setPiece] = useState<number>(props.piece ? props?.piece:1);
  useEffect(() => {
     // Favori kontrolü yapmak için AsyncStorage kullanılıyor, ona göre buton değişecek
    const checkFavourite = async ({ id }: { id: number }) => {
      try {
        const favourites = await AsyncStorage.getItem("favourites");

        if (favourites !== null) {
          const parsedFavourites: any[] = JSON.parse(favourites);

          setIsFav(
            parsedFavourites.some((product) => product?.selecteditem?.id === id)
          );
        }
      } catch (error) {
        console.error("Error retrieving favourites from AsyncStorage: ", error);
      }
    };
    checkFavourite({ id: props.id });
  }, [isFav]);
  const increment = () => {
    props?.increment ? props.increment() : null;
     
    setPiece((prev) => prev + 1)
  }
  const decrement = () => {
    props?.decrement ? props.decrement() : null;
     piece>=1  ? 
    setPiece((prev) => prev - 1) : null
  }
  return (
    <TouchableOpacity
      key={props.id}
      style={[card.container, props.viewStlye]}
      onPress={props.isCart ? undefined:props.onClick}
      activeOpacity={props.AddCartComp || props.isCart ? 1 : 0.3}>
      {props.isCart ? (
        <View style={{ flexDirection: "row" ,alignItems:"center"}}>
          <Image
            source={{ uri: props.imageUrl }}
            style={[
              props.imageStyle ? props.imageStyle : card.image,
              props.AddCartComp ? { borderRadius: 20 } : null,
            ]}
          />
        
          <View style={card.marginten}>
            <Text style={card.smallname}>{props.name}</Text>
            <Text>{props.price} TL</Text>
            <Text>{props.shippingMethod}</Text>
          </View>
          {props.increment ? <View style={{ flexDirection: "row" ,alignItems:"center"}} >
            <Ionicons name="add" size={heightPercentageToDP(3)} onPress={() =>increment()}/>
            <Text style={{ fontSize: heightPercentageToDP(2), borderWidth: 1, padding: 8 ,textAlign:"center"}}>{ piece}</Text>
            {piece <=1 ?<Ionicons name="trash" size={heightPercentageToDP(3)} onPress={props.deleteCartItem}   />:  <Ionicons name="remove" size={heightPercentageToDP(3)}   onPress={() =>decrement()}/>}
          </View> : null}
        </View>
      ) : (
        <View style={{ flexDirection: "column" }}>
          <Text style={card.name}>{props.name}</Text>
          <Image
            source={{ uri: props.imageUrl }}
            style={[
              props.imageStyle ? props.imageStyle : card.image,
              props.AddCartComp ? { borderRadius: 20 } : null,
            ]}
          />
        </View>
      )}
      {props.description ? (
        <View style={card.descView}>
          <Text style={card.decText}>{props.description}.</Text>
          <Text>
            {props.shippingMethod} {props.price} TL
          </Text>
          {!props.inFav ? (
            <Text style={card.decText}>
              {isFav ? "Favoride" : "Favorilere Eklemek İçin Tıkla"}{" "}
            </Text>
          ) : null}
          {props.AddCartComp}
        </View>
      ) : null}
      
    </TouchableOpacity>
  );
};

export default Card;
