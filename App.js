import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Login from './components/Login';
import Register from './components/Register';
import axios from 'axios';
import Home from './components/Home';
import Pengertian from './components/Materi/Pengertian'
import Jenis from './components/Materi/Jenis'
import Contoh from './components/Materi/Contoh'
import Sejarah from './components/Materi/Sejarah'
import Fungsi from './components/Materi/Fungsi'
import Unsur from './components/Materi/Unsur'

const Stack = createStackNavigator();

const App = () => {
  return(
    <>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pengertian" component={Pengertian}/>
        <Stack.Screen name="Jenis" component={Jenis}/>
        <Stack.Screen name="Contoh" component={Contoh}/>
        <Stack.Screen name="Sejarah" component={Sejarah}/>
        <Stack.Screen name="Fungsi" component={Fungsi}/>
        <Stack.Screen name="Unsur" component={Unsur}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;
