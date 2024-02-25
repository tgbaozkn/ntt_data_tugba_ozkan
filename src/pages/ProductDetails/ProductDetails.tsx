import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  fetchProducts,
  productSelector,
} from "../../features/products/productSlice";
import Card from "../../components/Card/Card";
import { productdetailstyle } from "./ProductDetails.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../components/Loading/Loading";
import { Colors } from "../../../styles";

import { NavigationProp } from "@react-navigation/native";


type Props = {
  navigation: NavigationProp<any, any>;
};

const ProductDetails = (props: Props) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
const [newFavourites, setNewFavourites] = useState<any[]>([]);
  // Redux store'dan durum seçicisi ve dispatch fonksiyonu alınıyor
  const selectedProducts = useAppSelector(productSelector); // Seçilen ürünleri almak için useSelector kullanılıyor
  const dispatch = useAppDispatch(); // Action göndermek için useDispatch kullanılıyor

  useEffect(() => {
    // Komponent mount edildiğinde ürünleri getir
    dispatch(fetchProducts()); // Ürünleri getirmek için fetchProducts işlevi dispatch ediliyor
  }, [dispatch]); // Bağımlılık dizisi içerisinde dispatch yer alıyor, böylece sadece dispatch değiştiğinde useEffect tekrar çalışır

  
   const wait = () => { // Defined the timeout function for testing purpose
    return new Promise(resolve => setTimeout(resolve, 2000));
}
  useEffect(() => {
    async function getFavourites() {
      const favourites = await AsyncStorage.getItem("favourites");

    if (favourites !== null) {
      setNewFavourites(JSON.parse(favourites));

    }
  }
    getFavourites();
    
    
  },[newFavourites])
  
  const addFav = async ({ selecteditem }: { selecteditem: any }) => {
  
  try {
    
    if (newFavourites) {
      let isNew: any = newFavourites.filter((prod) => prod?.selecteditem?.id === selecteditem?.id);

      console.log(isNew.length<1)

    if (isNew.length<1) {
   
      let updatedFavourites = [...newFavourites, { selecteditem }];
       await AsyncStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      wait().then(() => props?.navigation?.navigate("Favorites",{updatedFavourites}));
    }
     
      
}
   
    

  
  } catch (e) {
    console.log("Favori eklenirken bir hata oluştu:", e);
    }
    
};

const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait().then(() => setRefreshing(false));
}, []);

  const renderProductDetail = ({ item }: { item: any }) => {
     return (
      <Card
        imageUrl={item.imageUrl}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        shippingMethod={item.shippingMethod}

   
        viewStlye={productdetailstyle.container}
         onClick={() => addFav({ selecteditem: item })}
         
    
       
      />
    ); //Flatlistin render ettiği component
  };

  return (
    <View>
      {selectedProducts.loading ?<Loading loadingmessage="Loading..." />: null}
      <FlatList
        data={selectedProducts.products}
        renderItem={renderProductDetail}
    
         refreshControl={<RefreshControl
           refreshing={refreshing}
           
         onRefresh={() => onRefresh}
         colors={[Colors.pastelorange]}
         tintColor={Colors.pastelorangelittledark}
          />}
      />
    </View>
  );
};

export default ProductDetails;
