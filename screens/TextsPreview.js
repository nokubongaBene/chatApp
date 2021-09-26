import React, {useState} from 'react';
import {SafeAreaView,Alert, ScrollView, StatusBar, StyleSheet, Text, Image, useColorScheme, View,TouchableOpacity} from 'react-native';
import styles from "../styles/styles";
import {NavigationContainer } from '@react-navigation/native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import auth from '@react-native-firebase/auth';

export default function TextsPreview({navigation}){
    const handleTouch = () => {
        navigation.navigate('Chats')
    }

    return(
        <View>
            <TouchableOpacity style={styles.textLogin} onPress={() => handleTouch()}>
            <Text>Hello</Text>
            </TouchableOpacity>
            </View>
    )
}