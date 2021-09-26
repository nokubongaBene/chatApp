import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image} from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Login  from './screens/Login';
import Register  from './screens/Register';
import TextsPreview from './screens/TextsPreview';
import Home from './screens/Home';
import auth from '@react-native-firebase/auth';
import Chats from './screens/Chats';


const Stack = createNativeStackNavigator();


export default function App({navigation}) {
  const [loggedIn, setLogIn] = useState(false);

  useEffect(() => {
    handleAuth();
  },[])

  const handleAuth = () =>{
    auth().onAuthStateChanged(user => {
      if(user){
        setLogIn(true);
      }
    })
  }
  return(
   
    <NavigationContainer>
       {(loggedIn ? 
      <Stack.Navigator screenOptions={{ headerShown: false}} >
        
        <Stack.Screen name="TextsPreview" component={TextsPreview} />
        <Stack.Screen name="Chats" component={Chats} />
        </Stack.Navigator>
    
:
      <Stack.Navigator screenOptions={{ headerShown: false}} >
      <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
      </NavigationContainer>
  );
}