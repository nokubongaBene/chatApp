import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
let width= Dimensions.get('window').width
let height= Dimensions.get('window').height


export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width : width,
        height: height,

    },
    heading: {
        marginTop: height * 0.001,
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',

    },
    viewText:{
        width: width * 0.5,
        marginTop: height * 0.25,
        marginLeft: width * 0.09,

    },
    signUp:{
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 25,

    },
    textSign: {
        borderRadius: 30,
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.8,
        marginLeft: width * 0.09,
        height: height * 0.08,
        marginTop: height * 0.22,
    },
    signIn: {
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 25,
        color: 'white',
    },
    textSignIn:{
        borderRadius: 30,
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.8,
        marginLeft: width * 0.09,
        height: height * 0.08,
        marginTop: height * 0.05,
        backgroundColor: 'black',
    },
    image:{
        marginLeft: width * 0.6,
        height: height * 0.40,
        width: width * 0.60,
        position:'absolute',
        borderRadius: 15,
    },
    welcome:{
        backgroundColor: 'white',
        width : width,
        height: height,  
    },
    welcomeText:{
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: width * 0.09,
        marginTop: height * 0.08,
    },
    card: {
        marginTop: height * 0.08,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: 'black',
        shadowRadius: 5,
        width: width * 0.9,
        marginLeft: width * 0.05,
        height: height * 0.8

    },
    textLogin: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.8,
        marginLeft: width * 0.05,
        height: height * 0.08,
        marginTop: height * 0.05,
        backgroundColor: 'white',
    },
    Login:{
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 20,
        color: 'black',
    },
    loginTexts:{
        color: 'white',
        marginLeft: width * 0.05,
        marginTop: height * 0.05
    },
    imageLog:{
        position: 'absolute',
        height: height * 0.6,
        width: width ,

    },
    input:{
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 10,
        width: width * 0.75,
        marginLeft: width * 0.05,
        color: 'white'
    },
    bordStyle:{
        backgroundColor:'orange',
        height: height * 0.20,
        width: width * 0.35, 
        borderRadius: 15,
        borderWidth: 4,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginLeft: width * 0.29,
        marginTop: height * 0.15
    },
    cardOrange:{
        marginTop: height * 0.15,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#fff',
        shadowRadius: 5,
        width: width * 0.9,
        marginLeft: width * 0.05,
        height: height * 0.6
    },
    chatContainer:{
        backgroundColor: 'black',
        justifyContent: "center",
        alignItems: "center",
        height: height * 0.1,
        width: width * 0.9,
        marginTop: height * 0.05,
        marginLeft: width * 0.05,
        borderRadius: 8,

    },
    chatScreen:{ 
       flex: 1,
       backgroundColor:'#FFF'

    },
    text:{
        fontSize: 20, 
        color: '#FFF',
    },
    currentEmail:{
        backgroundColor: '#FFF',
    },
    image:{
        marginLeft: width * 0.29,
        marginTop: height * 0.15,
        borderRadius: 15,
        height: height * 0.20,
        width: width * 0.35, 
    }
})