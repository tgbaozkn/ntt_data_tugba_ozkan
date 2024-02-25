import { View,  FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../../components/Card/Card";
import { cart } from "./Cart.style";
import TotalBelt from "./TotalBelt";

type Props = {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
};

const Cart = (props: Props) => {
  const [cartData, setCartdata] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);




  useEffect(() => {
    AsyncStorage.getItem("CartData")
      .then((storedData) => {
        if (storedData !== null) {
          const retrievedData = JSON.parse(storedData);
          
          console.log("Geri çağrılan veri:", retrievedData);
          setCartdata(retrievedData);
          calculateTotal({ item: retrievedData },"calc");
        } else {
          console.log("Depolanan veri bulunamadı.");
        }
      })
      .catch((error) =>
        console.error("Veri geri çağrılırken bir hata oluştu:", error)
      );
  }, [props?.route?.params]);

  const calculateTotal = ({ item }: { item: any },action:string) => {
    if (item.length > 0) {
      const total = item.reduce((accumulator: any, item: any) => {
     
        const num = parseFloat(item?.item.price) || 0;
        return accumulator + num;
      }, 0);
      setTotal(total);
    } else {
     const num = parseFloat(item?.price) || 0;
    if (action === 'add') {
      setTotal((prevTotal) => prevTotal + num);
    } else if (action === 'subtract') {
      setTotal((prevTotal) => prevTotal - num);
    }
    const index = cartData.findIndex(product => product.item.id === item.id);
    if (index !== -1) {
      const updatedCartData = [...cartData];
      if (action === 'add') {
        updatedCartData[index].piece += 1;
      } else if (action === 'subtract') {
        updatedCartData[index].piece -= 1;
      }
      setCartdata(updatedCartData);
    }
    }
  };

  
const removeItem = async ({item}:{item:any}) => {
  try {
      
    var updatedCartData = cartData.filter((product: any) => product.item.id !== item.item.id);
   
        //Güncellenmiş veriyi AsyncStorage'e geri yaz
        await AsyncStorage.setItem("CartData", JSON.stringify(updatedCartData));
        
    //     // // Kart verilerini güncelle
        setCartdata(updatedCartData);
        
    //     // // Toplamı yeniden hesapla
         calculateTotal({ item: updatedCartData }, "calc");
        
         console.log("Ürün başarıyla kaldırıldı.");
      
    } catch (error) {
      console.error("Ürün kaldırılırken bir hata oluştu:", error);
    }
  };


  
  const renderCart = ({ item }: { item: any }) => {
    return (
      <Card
        id={item?.item?.id}
        imageUrl={item?.item?.imageUrl}
        name={item?.item?.name}
        onClick={() => console.log("sepette")}
        imageStyle={cart.image}
        isCart={true}
        viewStlye={cart.container}
        price={item?.item?.price}
        shippingMethod={item?.item?.shippingMethod}
        increment={() => calculateTotal({ item: item.item},"add")}
        decrement={() => calculateTotal({ item: item.item }, "subtract")}
        deleteCartItem={()=>removeItem({item:item})}
      
      />
    );
  };
  return (
    <View>
      <FlatList data={cartData} renderItem={renderCart} ListHeaderComponent={<TotalBelt text="Toplam:" total={cartData.length>0 ? total : 0} />}/>
     <TotalBelt text="Ürünleri Satın Al" />
    </View>
  );
};

export default Cart;
