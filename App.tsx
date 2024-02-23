import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyTabs from './src/components/MyTabs/MyTabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import {store} from "./src/redux/store/store"
export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
      <MyTabs />
      </NavigationContainer>
      </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
