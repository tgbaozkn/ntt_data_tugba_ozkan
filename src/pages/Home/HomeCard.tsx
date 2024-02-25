import {  Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import { homestyle } from './Home.style';

type Props = {
  item: string;
  navigation: NavigationProp<any, any>;
 
}

const HomeCard = (props: Props) => {
  const removeValue = async () => {
   
  try {
    await AsyncStorage.removeItem("login")
    props.navigation.navigate("Login")

  } catch(e) {
    console.log(e)
  }

  console.log('Done.')
  }
  const goTo = ({ page }: { page: string }) => {
    page = page.replace(" ","")
    props.navigation.navigate(page);
  }
  return (
      <TouchableOpacity style={homestyle.homecardview} onPress={ ()=>props.item=="Logout"?removeValue() : goTo({page:props.item})}>
      <Text style={homestyle.homecardtitle}>{props.item}</Text>
    </TouchableOpacity >
  )
}

export default HomeCard