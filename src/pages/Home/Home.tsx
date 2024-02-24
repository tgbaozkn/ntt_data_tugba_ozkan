import { View, Text ,FlatList, Image} from 'react-native'
import React, { useEffect, useState } from 'react'

import HomeCard from './HomeCard';
import { useNavigation } from '@react-navigation/native';
import { homestyle } from './Home.style';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  
}

const Home = (props: Props) => {
  const mixedArray: string[] = ["Product List", "Product Details", "Favorites", "Cart", "Logout"];
  const navigation: any = useNavigation()
  const [data, setData] = useState<any>();
  useEffect(() => {
     const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("login");
         const newObject: any = jsonValue ? JSON.parse(jsonValue) : null;
      setData( newObject);
    } catch (e) {
      console.log(e);
       }  
    };
    getData();
  
  })
 const renderArray = ({ item }: { item: string }) => {
  return (
    <HomeCard item={item}  navigation={navigation}/>
  );
};
  return (
    <View style={homestyle.container}>
      <Image source={require("../../../assets/images/nttdatalogo.png")} style={homestyle.image}/>
      <Text style={homestyle.title}>Dear {data?.username}, Welcome to the Home Page!</Text>
      <FlatList data={mixedArray} renderItem={renderArray} />
    </View>
  )
}

export default Home