import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks"; // Redux hooks'u import ediliyor
import { Product, fetchProducts, productSelector } from "./productSlice"; // Ürünlerin dilimini ve asenkron işlevi import ediliyor
import { Text, View } from "react-native"; // React Native bileşenleri import ediliyor

function ProductPage() {
  // Redux store'dan durum seçicisi ve dispatch fonksiyonu alınıyor
  const selectedProducts = useAppSelector(productSelector); // Seçilen ürünleri almak için useSelector kullanılıyor
  const dispatch = useAppDispatch(); // Action göndermek için useDispatch kullanılıyor

  useEffect(() => {
    // Komponent mount edildiğinde ürünleri getir
    dispatch(fetchProducts()); // Ürünleri getirmek için fetchProducts işlevi dispatch ediliyor
  }, [dispatch]); // Bağımlılık dizisi içerisinde dispatch yer alıyor, böylece sadece dispatch değiştiğinde useEffect tekrar çalışır

  return (
    <View>
      {/* Ürünler yüklenirken loading gösterilir */}
      {selectedProducts.loading && <View><Text>Loading...</Text></View>}
      {/* Hata oluştuğunda hata mesajı gösterilir */}
      {selectedProducts.error && <View><Text>Error: {selectedProducts.error}</Text></View>}
      {/* Ürünlerin listesi gösterilir */}
      {selectedProducts.products.map((product: Product, index: number) => (
        <Text key={product.id}>
          {/* Her ürün için bilgiler gösterilir */}
          {product.id} | {product.name} | {product.description} | {product.price}
        </Text>
      ))}
    </View>
  );
}

export default ProductPage;
