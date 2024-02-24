import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
    item: string;
 
}

const HomeCard = (props: Props) => {
      const removeValue = async () => {
  try {
    await AsyncStorage.removeItem("login")
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}
  return (
      <TouchableOpacity style={{margin:20}} onPress={ ()=>props.item=="Logout"?removeValue() : null}>
      <Text>{props.item}</Text>
    </TouchableOpacity >
  )
}

export default HomeCard