import { FlatList, SafeAreaView,  View } from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  fetchProducts,
  productSelector,
} from "../../features/products/productSlice";

import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import BottomSheetComp from "../../components/BottomSheet/BottomSheetComp";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Button from "../../components/Button/Button";
import { buttonstyle } from "./ProductList.style";

type Props = {};

const ProductList = (props: Props) => {
  // Redux store'dan durum seçicisi ve dispatch fonksiyonu alınıyor
  const selectedProducts = useAppSelector(productSelector); // Seçilen ürünleri almak için useSelector kullanılıyor
  const dispatch = useAppDispatch(); // Action göndermek için useDispatch kullanılıyor

  useEffect(() => {
    // Komponent mount edildiğinde ürünleri getir
    dispatch(fetchProducts()); // Ürünleri getirmek için fetchProducts işlevi dispatch ediliyor
  }, [dispatch]); // Bağımlılık dizisi içerisinde dispatch yer alıyor, böylece sadece dispatch değiştiğinde useEffect tekrar çalışır

  const [col, setCol] = useState<number>(2);
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);
  const [item, setItem] = useState<{ [key: string]: any }>({});
  const [sortedProducts, setSortedProducts] = useState<any[]>(selectedProducts.products);

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["50%"], []);
  
  const openModal = () => {
    bottomSheetRef?.current?.present();
  };
  const renderCard = ({ item }: { item: any }) => {
    return (
      <Card
        imageUrl={item.imageUrl}
        id={item.id}
        name={item.name}
        onClick={() => {
          setItem(item);
          openModal();
        }}
      />
    ); //Flatlistin render ettiği component
  };
  const sortProductsAlphabetically = () => {
    const sorted = [...selectedProducts.products].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedProducts(sorted);
  };
  const sortProductsByPrice = () => {
    const sorted = [...selectedProducts.products].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setSortedProducts(sorted);
  };
  return (
    <SafeAreaView>
      {selectedProducts.loading ? (
        <Loading loadingmessage="Loading..." />
      ) : null}
      <Error errormessage={selectedProducts.error} />
      <View style={{ flexDirection: "row" }}>
        
        <Button
          onPress={sortProductsAlphabetically}
          text="Alfabetik Sırala"
          viewStyle={buttonstyle.container}
          textStyle={buttonstyle.title}
        />
        <Button
          onPress={sortProductsByPrice}
          text="Ucuzdan Pahalıya Sırala"
          viewStyle={buttonstyle.container}
          textStyle={buttonstyle.title}
        />
      </View>

      <FlatList
        data={sortedProducts.length>5 ? sortedProducts : selectedProducts.products}
        renderItem={renderCard}
        numColumns={col}
        key={`flat-list-${col}`}
      />
      <BottomSheetComp
        show={showBottomSheet}
        item={item}
        bottomSheetRef={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
      />
    </SafeAreaView>
  );
};

export default ProductList;
