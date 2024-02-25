import {  Text, Image } from "react-native";
import React, { useState } from "react";

import Input from "../../components/Input/Input";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import Button from "../../components/Button/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp } from "@react-navigation/native";


type Props = {
  navigation: NavigationProp<any, any>;
};

const Login = (props: Props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onLoginPressed = () => {
    if (!username || !password) {
      alert("Lütfen alanları doldurun");
    } else if (username.toLocaleLowerCase() === "nttdata" && password === "hireme") {
      console.log("setuser öncesi")
      setUser();
      props.navigation.navigate("MyTabs");
      
    }else {
        alert("Kullanıcı adı ya da şifre yanlış!! Kullanıcı adı : nttdata, Şifre : hireme")
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
          width: widthPercentageToDP(85),
          resizeMode: "cover",
          marginBottom: heightPercentageToDP(10),
          borderWidth: 0.1,
          marginHorizontal:widthPercentageToDP(7.5),
          borderRadius:20,
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
