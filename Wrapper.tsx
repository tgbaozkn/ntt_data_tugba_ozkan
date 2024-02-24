import MyTabs from "./src/components/MyTabs/MyTabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Login from "./src/pages/Login/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Wrapper() {
  const [isLogin, setIsLogin] = useState<boolean>();
  const [data, setData] = useState<string>();

  const getData = async () => {
  
    try {
      const jsonValue = await AsyncStorage.getItem("login");
  
      const newObject: any = jsonValue ? JSON.parse(jsonValue) : null;
      setData(newObject);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData().finally(() => (data ? setIsLogin(true) : setIsLogin(false)));
  }, [data, isLogin,getData]);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Provider store={store}>
          <NavigationContainer>
         
            {isLogin ? <MyTabs /> : <Login />}
          </NavigationContainer>
        </Provider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
