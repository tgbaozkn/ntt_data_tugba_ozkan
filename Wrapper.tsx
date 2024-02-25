import MyTabs from "./src/components/MyTabs/MyTabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Login from "./src/pages/Login/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import SplashScreen from "./src/pages/SplashScreen/SplashScreen";
import ProductDetails from "./src/pages/ProductDetails/ProductDetails";
import ProductList from "./src/pages/ProductList/ProductList";
import Favorites from "./src/pages/Favorites/Favorites";
import Cart from "./src/pages/Cart/Cart";
import Home from "./src/pages/Home/Home";
const Stack = createNativeStackNavigator();
export default function Wrapper() {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("login");
      setData(jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {isLoading ? (
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
              ) : (
                 <Stack.Screen name="Login" component={Login} />
              )}
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />
              <Stack.Screen name="ProductList" component={ProductList} />
              <Stack.Screen name="Favorites" component={Favorites} />
              <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="MyTabs" component={MyTabs} />

            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
