import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Platform,  View, StyleSheet } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomSheetComp from '../BottomSheet/BottomSheetComp';
import Button from '../Button/Button';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from '../../../styles';

export default function LocationComponent() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["50%"], []);

  const openModal = () => {
    bottomSheetRef?.current?.present();
  };
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Device?.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  let text: string = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    AsyncStorage.setItem("location", text);
  }

  return (
    <View style={styles.container}>
    
        <Button text='Lokasyon' onPress={()=>openModal()}viewStyle={{height:heightPercentageToDP(4),width:widthPercentageToDP(20),backgroundColor:Colors.pastelorange}} textStyle={{fontSize:heightPercentageToDP(2),padding:5}}/>
       <BottomSheetComp

        longtitude={location?.coords.longitude.toString()}
        latitude={location?.coords.latitude.toString()}
        bottomSheetRef={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        isInHome={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
