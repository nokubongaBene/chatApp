import React,{useState, useEffect, Component} from 'react';
import {SafeAreaView,Alert, ScrollView, StatusBar, StyleSheet, Text, Image, useColorScheme, View,TouchableOpacity, TextInput} from 'react-native';
import styles from "../styles/styles";
import {NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';



export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      const handleSignIn = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            //getting user info
            console.log('Logged In');
        }).catch(error=> {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }
          else if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }
          else{
              Alert.alert(error.message);
          }
        })
          
        };
      
      return(
        <View style={styles.welcome}>
        <View style={styles.card}>
           
        <Text style={styles.welcomeText}>Almost, There!</Text>

        <Text style={styles.loginTexts}>Email</Text>
    <TextInput style={styles.input} onChangeText={setEmail} value={email} />
    <Text style={styles.loginTexts} >Password:</Text>
    <TextInput style={styles.input} onChangeText={setPassword} value={password} secureTextEntry={true} />
        <TouchableOpacity style={styles.textLogin} onPress={(createUser) =>handleSignIn()}>
            <Text style={styles.Login}>Sign In</Text>
            </TouchableOpacity>

        
    </View>
    </View>
    
  
       
      );
    };
  
  
    