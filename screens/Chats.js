import React, {useState, useEffect } from 'react';
import {SafeAreaView,Alert, ScrollView, StatusBar, StyleSheet, Text, Image, useColorScheme, View,TouchableOpacity} from 'react-native';
import styles from "../styles/styles";
import {NavigationContainer } from '@react-navigation/native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function Chats(){
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState();

    const handleSend = (messages) => {
        database().ref('chatId/' + Date.now().toString()).set(messages[0]);
    }
    const handleChats = () => {
        database().ref('chatId/').on('value', snapshot => {
            if(snapshot.val() != null){
                setMessages([]);
                let texts = snapshot.val();
                let keys = Object.keys(texts);
                console.log(keys);
                for(let x =0; x<keys.length; x++ ){
                    let data = texts[keys[x]];
                    setMessages((prevMessages) =>
                GiftedChat.append(prevMessages, data))
                }
                // console.log('chats: ', snapshot.val());
           
            }
            
        })

    }
    const getUser = () => {
         setUser(auth().currentUser);
    }
    useEffect(() => {
        handleChats();
        getUser();
      },[])
    return(
        <View style={styles.chatContainer}>
            {user ?
            <GiftedChat messages={messages} onSend={(messages) => {handleSend(messages)}} user={{_id: user.email}} />
                :
                null }
            </View>
    )
}