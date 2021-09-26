import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
let width= Dimensions.get('window').width
let height= Dimensions.get('window').height


export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#122543',
        width : width,
        height: height,

    },
    heading: {

        fontSize: 50,
        color: '#FFB6B5',
        fontWeight: 'bold',

    },
    viewText:{
        width: width * 0.5,
        marginTop: height * 0.25,
        marginLeft: width * 0.09,

    },
    signUp:{
        color: '#FFB6B5',
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 25,

    },
    textSign: {
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#FFB6B5',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.8,
        marginLeft: width * 0.09,
        height: height * 0.08,
        marginTop: height * 0.22,
    },
    signIn: {
        color: '#FFB6B5',
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 25,
        color: '#333',
    },
    textSignIn:{
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#FFB6B5',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.8,
        marginLeft: width * 0.09,
        height: height * 0.08,
        marginTop: height * 0.05,
        backgroundColor: '#FFB6B5',
    },
    image:{
        marginLeft: width * 0.6,
        height: height * 0.40,
        width: width * 0.60,
        position:'absolute',
        borderRadius: 15,
    },
    welcome:{
        backgroundColor: '#FFB6B5',
        width : width,
        height: height,  
    },
    welcomeText:{
        fontSize: 60,
        color: '#FFB6B5',
        fontWeight: 'bold',
        marginLeft: width * 0.09,
        marginTop: height * 0.08,
    },
    card: {
        marginTop: height * 0.08,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#122543',
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
        backgroundColor: '#FFB6B5',
    },
    Login:{
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 20,
        color: 'white',
    },
    loginTexts:{
        color: '#FFB6B5',
        marginLeft: width * 0.05,
        marginTop: height * 0.05
    },
    imageLog:{
        position: 'absolute',
        height: height * 0.6,
        width: width ,

    },
    input:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
        width: width * 0.75,
        marginLeft: width * 0.05
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
        flex: 1,
        backgroundColor: '#FFB6B5',
    }
})