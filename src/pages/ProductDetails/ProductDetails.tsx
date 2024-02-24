import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  fetchProducts,
  productSelector,
} from "../../features/products/productSlice";
import Card from "../../components/Card/Card";
import { productdetailstyle } from "./ProductDetails.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../components/Loading/Loading";
import { loadingerror } from "../../components/Loading/Loading.style";

type Props = {};

const ProductDetails = (props: Props) => {
  // Redux store'dan durum seçicisi ve dispatch fonksiyonu alınıyor
  const selectedProducts = useAppSelector(productSelector); // Seçilen ürünleri almak için useSelector kullanılıyor
  const dispatch = useAppDispatch(); // Action göndermek için useDispatch kullanılıyor

  useEffect(() => {
    // Komponent mount edildiğinde ürünleri getir
    dispatch(fetchProducts()); // Ürünleri getirmek için fetchProducts işlevi dispatch ediliyor
  }, [dispatch]); // Bağımlılık dizisi içerisinde dispatch yer alıyor, böylece sadece dispatch değiştiğinde useEffect tekrar çalışır
  const [isFavourited, setIsFavourited] = useState<boolean>(false);
 let newFavourites: any[] = [];
  useEffect(() => {
    async function getFavourites() {
      const favourites = await AsyncStorage.getItem("favourites");

    if (favourites !== null) {
      newFavourites = await JSON.parse(favourites);

    }
  }
    getFavourites();
    
    
  },[newFavourites])
  
  const addFav = async ({ selecteditem }: { selecteditem: any }) => {
  
  try {
    
    if (newFavourites) {
      let isNew: any = newFavourites.filter((prod) => prod.selecteditem.id === selecteditem.id);

      console.log(isNew.length<1)

    if (isNew.length<1) {
   
         newFavourites.push({ selecteditem });
      
    }
      await AsyncStorage.setItem("favourites", JSON.stringify(newFavourites));
      
}
   
    

  
  } catch (e) {
    console.log("Favori eklenirken bir hata oluştu:", e);
  }
};
 
  const renderProductDetail = ({ item }: { item: any }) => {
     return (
      <Card
        imageUrl={item.imageUrl}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        shippingMethod={item.shippingMethod}
        imageStyle={productdetailstyle.image}
        viewStlye={productdetailstyle.container}
        descriptionStyle={productdetailstyle.descView}
        desctextStyle={productdetailstyle.decText}
         onClick={() => addFav({ selecteditem:item })}
    
       
      />
    ); //Flatlistin render ettiği component
  };
  return (
    <View>
      {selectedProducts.loading ?<Loading loadingmessage="Loading..." />: null}
      <FlatList
        data={selectedProducts.products}
        renderItem={renderProductDetail}
      />
    </View>
  );
};

export default ProductDetails;
