import { FlatList,  StyleSheet,  View } from "react-native";
import React, {  useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Card from "../../components/Card/Card";
import { productdetailstyle } from "../ProductDetails/ProductDetails.style";
import AddCart from "../../components/AddCart/AddCart";
import { NavigationProp, RouteProp } from "@react-navigation/native";

type Props = {
  navigation?: NavigationProp<any, any>;
  route?: RouteProp<any, any>;
};

const Favorites = (props: Props) => {
  const [favArray, setFavArray] = useState<any>(props?.route?.params?.updatedFavourites);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  console.log(props.route?.params)
  useEffect(() => {
    AsyncStorage.getItem("favourites").then((favData) => {
      if (favData !== null) {
        const parsedFavourites: any[] = JSON.parse(favData);
        let newParsedFav = [...parsedFavourites];
        setFavArray(newParsedFav);
      }
      else {
        console.log("Depolanan veri bulunamadı.");
      }
  
    }) .catch((error) =>
        console.error("Veri geri çağrılırken bir hata oluştu:", error)
      );
 
    
    
  }, [props.route?.params]);
  const wait = () => {
    // Defined the timeout function for testing purpose
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  
 let cartData: any[] = [];
  useEffect(() => {
    async function getCartData() {
      const cartdata = await AsyncStorage.getItem("CartData");
    
    if (cartdata !== null) {
      cartData = await JSON.parse(cartdata);

    }
  }
    getCartData();
    
    
  },[cartData])
  
  const addCart = async ({ item }: { item: any }) => {
  
  try {
    
    if (cartData) {
      let isNew: any = cartData.filter((prod) => prod?.item?.id === item?.id);

      console.log(isNew.length<1)
   

    if (isNew.length<1) {
   
         cartData.push({ item });
      
    }
      await AsyncStorage.setItem("CartData", JSON.stringify(cartData));
      
}
   
    

  
  } catch (e) {
    console.log("Favori eklenirken bir hata oluştu:", e);
  }
};
  const goToCartPage = ({ item }: { item: any }) => {
   
     
    addCart({item:item});
    wait().then(() => props?.navigation?.navigate("Cart", { item }));
  
  };

  
  const renderFav = ({ item }: { item: any }) => {
    return (
      <Card
        id={item.id}
        imageUrl={item.selecteditem.imageUrl}
        name={item.selecteditem.name}
        onClick={() => console.log("sepete ekle")}

        description={item.selecteditem.description}
        price={item.selecteditem.price}
        shippingMethod={item.selecteditem.shippingMethod}
        viewStlye={productdetailstyle.container}
        inFav={true}
        AddCartComp={<AddCart onClick={()=>goToCartPage({item:item.selecteditem})}/>}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={favArray}
        renderItem={renderFav}
     
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
