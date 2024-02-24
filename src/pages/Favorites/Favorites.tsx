import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {}

const Favorites = (props: Props) => {
  const [favArray, setFavArray] = useState<any>();
  useEffect( () => {
   async function getArrayOFavs() {
    
  
      try {
        const currentFavsString = await AsyncStorage.getItem("favs");
        const dataArray = currentFavsString ? await JSON.parse(currentFavsString) : "";
        setFavArray(dataArray);
      } catch (e) {
        console.log(e)
      }

    }
    getArrayOFavs();
  },[favArray])
  return (
    <View>
      <Text>{favArray?.length }</Text>
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({})