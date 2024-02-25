import { View,  StyleSheet, Animated, Image } from "react-native";
import React, { useEffect, useRef } from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const SplashScreen = () => {
  const imageMargin = useRef(new Animated.Value(0)).current;
  const elevate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(imageMargin, {
          toValue: heightPercentageToDP(15),
          duration: 850,
          useNativeDriver: true,
        }),
        Animated.timing(imageMargin, {
          toValue: 0,
          duration: 850,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };
  useEffect(() => {
    elevate();
  }, [imageMargin]);
 
  return (
    <View style={styles.container}>
   
          <Animated.Image
            source={require("../../../assets/images/nttdatalogo.png")}
     
            resizeMode="contain"
            style={{
              height: heightPercentageToDP(20),
              width: widthPercentageToDP(80),
        
              transform: [
                {
                  translateY:
                  imageMargin
                ,
                },
              ],
            }}
          />
       

    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: heightPercentageToDP(30)
  },

});