import React from 'react';
import {SafeAreaView,Alert, ScrollView, StatusBar, StyleSheet, Text, Image, useColorScheme, View,TouchableOpacity} from 'react-native';
import styles from "../styles/styles";
import {NavigationContainer } from '@react-navigation/native';


export default Home = ({navigation}) =>{
    const handleSignUp = () => {
        navigation.navigate('Register');
        
      };
    
      const handleSignIn = () => {
        navigation.navigate('Login');
      };
    
    return(
    <View style={styles.container}>
        <View style={styles.viewText}>
        <Text style={styles.heading}>Chat With Me!!</Text>
        </View>
        <TouchableOpacity style={styles.textSignIn} onPress={() =>handleSignIn()}>
            <Text style={styles.signIn}>Sign In</Text>
            </TouchableOpacity>
        <TouchableOpacity style={styles.textSign}  onPress={() =>handleSignUp()}>
            <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>

            
    </View>
  

     
    );
  }
 

  