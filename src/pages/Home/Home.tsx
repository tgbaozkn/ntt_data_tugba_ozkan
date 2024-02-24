import { View, Text ,FlatList} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeCard from './HomeCard';

type Props = {}

const Home = (props: Props) => {
  const mixedArray: string[] = ["Product List", "Product Details", "Favorites", "Cart", "Logout"];

 const renderArray = ({ item }: { item: string }) => {
  return (
    <HomeCard item={item}  />
  );
};
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text>Welcome to the Home Page!!</Text>
      <FlatList data={mixedArray} renderItem={renderArray} />
    </View>
  )
}

export default Home