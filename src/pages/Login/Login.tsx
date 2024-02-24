import { View, Text, Image } from "react-native";
import React, { useState } from "react";

import Input from "../../components/Input/Input";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import Button from "../../components/Button/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


type Props = {
  
};

const Login = (props: Props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nav = useNavigation()
  const onLoginPressed = () => {
    if (!username || !password) {
      alert("Lütfen alanları doldurun");
    } else {
      setUser();
    }
  };
  const setUser = async () => {
    const login = {
      username: username,
      password:password
    }
    try {
      await AsyncStorage.setItem("login", JSON.stringify(login));
    
      
    } catch (e) {
      console.log(e)
    }
    console.log("ayarlandı")
}
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignContent: "center",
        paddingTop: heightPercentageToDP(10),
        backgroundColor: "rgba(0,0,0,0.05)",
      }}>
      <Image
        source={require("../../../assets/images/nttdataimage.jpg")}
        style={{
          width: widthPercentageToDP(100),
          resizeMode: "contain",
          marginBottom: heightPercentageToDP(10),
        }}
      />
      <Text
        style={{
          fontSize: heightPercentageToDP(3.7),
          textAlign: "center",
          marginBottom: heightPercentageToDP(5),
          fontWeight: "700",
        }}>
        NTT DATA LOGIN
      </Text>
      <Input
        iconName="person"
        inputtext=" Kullanıcı Adı"
        value={username}
        onChangeText={(text: string) => setUsername(text)}
        placeholder="Lütfen kullanıcı adınızı girin"
        isPassword={false}
        size={heightPercentageToDP(2)}
      />

      <Input
        iconName="key"
        inputtext=" Şifre"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        placeholder="Lütfen parolanızı girin"
        isPassword={true}
        size={heightPercentageToDP(2)}
      />

      <Button text="Login" onPress={onLoginPressed} />
    </SafeAreaView>
  );
};

export default Login;
