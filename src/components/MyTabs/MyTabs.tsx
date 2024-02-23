import React from "react";
import { createBottomTabNavigator, BottomTabNavigationOptions   } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Home from '../../pages/Home/Home';
import ProductList from '../../pages/ProductList/ProductList';
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import Cart from "../../pages/Cart/Cart";
import Favorites from "../../pages/Favorites/Favorites";

// RootTabParamList tipini tanımla
type RootTabParamList = {
  Home: undefined;
  Cart: undefined;
  Favorites: undefined;
  ProductList: undefined;
  ProductDetails: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function MyTabs() {
  // Tab çubuğu seçeneklerini belirleme

const tabIcons: Record<string, { focused:any; outline: any}> = {
  Home: { focused: 'home', outline: 'home-outline' },
  ProductList: { focused: 'cloud', outline: 'cloud-outline' },
  Cart: { focused: 'add-circle', outline: 'add-circle-outline' },
  Favorites: { focused: 'heart', outline: 'heart-half' },
  ProductDetails: { focused: 'airplane', outline: 'airplane' },

  // Diğer sayfalar buraya eklenebilir
};
  // Her bir sekmenin simgesini belirleme
const getTabBarIcon = ({ route, focused, color, size }: { route: any, focused: boolean, color: string, size: number }) => {
  const tabInfo = tabIcons[route.name];

  if (tabInfo) {
    const iconName = focused ? tabInfo.focused : tabInfo.outline;
    return <Ionicons name={iconName} size={size} color={color} />;
  }

  return null;
};

  return (
 
    <Tab.Navigator
        initialRouteName="ProductList"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => getTabBarIcon({ route, focused, color, size }),
         
        
        })}
      >
        
        
        <Tab.Screen name="ProductList" component={ProductList} />
        <Tab.Screen name="ProductDetails" component={ProductDetails} />
        <Tab.Screen name="Home" component={Home} /> 
        <Tab.Screen name="Favorites" component={Favorites} /> 
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
 
  );
}

export default MyTabs;
