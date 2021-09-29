import React, {useState, useEffect } from 'react';
import {SafeAreaView,Alert, ScrollView, StatusBar, StyleSheet, Text, Image, useColorScheme, View,TouchableOpacity} from 'react-native';
import styles from "../styles/styles";
import {NavigationContainer } from '@react-navigation/native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import tryme from "../images/tryme.jpg";



export default function TextsPreview({navigation}){
    const [display, setDisplay] = useState([]);
    const [user, setUser] = useState({});
    const [userList, setUsersList] = useState([]);

   
    const handleChats = () => {
        database().ref('Users/').on('value', snapshot => {
            if(snapshot.val() != null){
                setDisplay([]);
                console.log('hello')
                let data = new Array();
                let texts = snapshot.val();
                let keys = Object.keys(texts);
                console.log(keys);
                for(let x =0; x<keys.length; x++ ){
                    data.push(texts[keys[x]])
                //    console.log(texts[keys[x]]);
                    }
                    console.log(data);
                    setUsersList(data);
                }
                // console.log('chats: ', snapshot.val());
           
            })

        }
    const getUser = () => {
         setUser(auth().currentUser);
    }
   

    useEffect(() => {
        handleChats();
        getUser();
       
      },[])
      function displayUsers() {
          
          return userList.map((users, index) => {
            if(users.email != auth().currentUser.email){
                return(
                    <View key={index} style={styles.chatContainer}> 
                        <TouchableOpacity  onPress={() =>
                      {navigation.navigate('Chats')}} >
                  <Text key={index} style={styles.text}>{users.email}</Text>
                  </TouchableOpacity>
                  </View>
                )
            }
          })
        }
          return(
            
            <View>
                <View style={styles.currentEmail}>
                <Image source={tryme} style={styles.image} />
                    <Text> benedictankambs@gmail.com</Text>
                    </View>
                
                {displayUsers()}
               
            </View>
         )
        
    }
    
