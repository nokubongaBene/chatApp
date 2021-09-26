import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text,Alert, Image, useColorScheme, View,TouchableOpacity, TextInput} from 'react-native';
import styles from "../styles/styles";
import {NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';



export default function Register({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


      const handleSignUp = () => {
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            //getting user info
            let user = auth().currentUser;
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;

            //pushing or setting user to details
            database().ref('Users/' + user.uid).set({
                email: email,
                 password: password, 
                 date: dateTime
                }).then(() => {
                    // navigation.navigate('TextsPreview');
                    // Alert.alert('User account created & signed in!');
                })
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }
      
          else if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }
          else{
              Alert.alert(error.message);
          }
        });
         
          
        };
      
      return(
          
        <View style={styles.welcome}>
        <View style={styles.card}>
           
        <Text style={styles.welcomeText}>Hey, Stranger!</Text>
        {/* <Text style={styles.loginTexts}>Name:</Text>
    <TextInput style={styles.input} />
    <Text style={styles.loginTexts}>Surname</Text>
    <TextInput style={styles.input} /> */}

        <Text style={styles.loginTexts}>Email</Text>
    <TextInput style={styles.input} onChangeText={setEmail} value={email} />
    <Text style={styles.loginTexts}>Password:</Text>
    <TextInput style={styles.input} onChangeText={setPassword} value={password} secureTextEntry={true} />
    {/* <Text style={styles.loginTexts}>Confirm Password:</Text>
    <TextInput style={styles.input} /> */}
        
    
        <TouchableOpacity style={styles.textLogin} onPress={() =>handleSignUp()}>
            <Text style={styles.Login}>Register</Text>
            </TouchableOpacity>
    </View>
    </View>
    
  
       
      );
    }
   
  
    