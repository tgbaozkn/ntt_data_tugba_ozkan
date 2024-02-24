import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  fetchProducts,
  productSelector,
} from "../../features/products/productSlice";
import Card from "../../components/Card/Card";
import { productdetailstyle } from "./ProductDetails.style";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};

const ProductDetails = (props: Props) => {
  // Redux store'dan durum seçicisi ve dispatch fonksiyonu alınıyor
  const selectedProducts = useAppSelector(productSelector); // Seçilen ürünleri almak için useSelector kullanılıyor
  const dispatch = useAppDispatch(); // Action göndermek için useDispatch kullanılıyor

  useEffect(() => {
    // Komponent mount edildiğinde ürünleri getir
    dispatch(fetchProducts()); // Ürünleri getirmek için fetchProducts işlevi dispatch ediliyor
  }, [dispatch]); // Bağımlılık dizisi içerisinde dispatch yer alıyor, böylece sadece dispatch değiştiğinde useEffect tekrar çalışır
  const addFav = async ({ item }: { item: any }) => {
  try {
    // Önce mevcut favori listesini al
    const currentFavsString = await AsyncStorage.getItem("favs");
  
    // Eğer currentFavsString null ise, boş bir dizi olarak ata
    let currentFavs: any[] = [];
    if (currentFavsString !== null) {
      currentFavs = JSON.parse(currentFavsString);
    }

    // Yeni öğeyi favori listesine ekle
    currentFavs.push(item);

    // Güncellenmiş favori listesini AsyncStorage'e geri kaydet
    await AsyncStorage.setItem("favs", JSON.stringify(currentFavs));

    console.log("Favori eklendi:", item);
    console.log(currentFavs);
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
        onClick={()=>addFav({item})}
      />
    ); //Flatlistin render ettiği component
  };
  return (
    <View>
      <FlatList
        data={selectedProducts.products}
        renderItem={renderProductDetail}
      />
    </View>
  );
};

export default ProductDetails;
