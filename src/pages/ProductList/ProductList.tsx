import { View, Text , FlatList, SafeAreaView,Animated, Easing} from 'react-native'
import React, { useEffect, useState,useRef } from 'react'

import {Colors} from "../../../styles"
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { Product, fetchProducts, productSelector } from '../../features/products/productSlice'

import Card from '../../components/Card/Card'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import BottomSheet from '../../components/BottomSheet/BottomSheet'
type Props = {}

const ProductList = (props: Props) => {

  const bottomSheetAnim = useRef(new Animated.Value(0)).current;
  const openModal = () => {
    Animated.timing(bottomSheetAnim, {
      toValue: heightPercentageToDP(40),
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver:false
    }).start()
  }
  const closeModal = () => {
    Animated.timing(bottomSheetAnim, {
      toValue: heightPercentageToDP(0),
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver:false
    }).start()
  }
  // Redux store'dan durum seçicisi ve dispatch fonksiyonu alınıyor
  const selectedProducts = useAppSelector(productSelector); // Seçilen ürünleri almak için useSelector kullanılıyor
  const dispatch = useAppDispatch(); // Action göndermek için useDispatch kullanılıyor

  useEffect(() => {
    // Komponent mount edildiğinde ürünleri getir
    dispatch(fetchProducts()); // Ürünleri getirmek için fetchProducts işlevi dispatch ediliyor
  }, [dispatch]); // Bağımlılık dizisi içerisinde dispatch yer alıyor, böylece sadece dispatch değiştiğinde useEffect tekrar çalışır

  const renderCard = ({item}: {item: any}) => {
  return <Card imageUrl={item.imageUrl} id={item.id} name={item.name} onClick={()=>openModal()}/> //Flatlistin render ettiği component
  }
  const [col, setCol] = useState<number>(2);
  const loadingmessage:string ="Loading..."
  console.log(bottomSheetAnim)
  return (
    <SafeAreaView >
      <Loading loadingmessage={loadingmessage} loadingsitiuation={selectedProducts.loading} />
      <Error errormessage={selectedProducts.error}  />
      <FlatList
        data={selectedProducts.products}
        renderItem={renderCard}
        numColumns={col}
        key={`flat-list-${col}`}
        
      />
      <BottomSheet description='aa' containerStyle={{height:bottomSheetAnim}} price={5} shippingMethod='ssds' />
    </SafeAreaView>
  )
}

export default ProductList