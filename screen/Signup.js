import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Button,Image, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';


export default function Signup() {
   const navigation = useNavigation()
   const [phone, setPhone] = useState('');
   const [isLoading, setIsLoading] = useState(false)

  
   const submitData = ()=>{
    setIsLoading(true)
    fetch("http://da2b-95-187-176-133.ngrok.io/send-data",{
      method:"POST",
      headers:{
        'Content-Type' :'application/json'
      },
      body:JSON.stringify({
        phone:phone
      })
    }).then(res=>res.json())
    .then(data =>{
      setIsLoading(false)
      console.log(data)
      NavigatTo();
    }).catch(err =>{
      setIsLoading(false)
      console.log(err)
      alert(err)
    })
   const NavigatTo=()=>{
     return navigation.navigate('Rewards1')
   }
   }

  

  return (
     <View style={styles.container}>
      <Image
       source={require('../assets/logo.png')}  //changed the extension of the image
       style={styles.img}
       //changed the text down in welcoming and the arrow color
       ></Image>
       <Text style={styles.text1} >Welcome To Golden Brown CheckIn</Text>  
       <Text style={styles.text2}> Type your number to become our guest!</Text>
       <ActivityIndicator size={'large'} color='#ffffff' animating={isLoading}/>

     <TextInput style={styles.inputBox}
       placeholder="  +966"
       onChangeText={phone => setPhone({phone})}
     />
     
     <TouchableOpacity onPress={() => submitData()}>
     <EvilIcons name='arrow-right' size={65} color='#ffffff'></EvilIcons>
     
     </TouchableOpacity>


        
   
    </View>
  );

  }




const styles = StyleSheet.create({ 
    container: {
      flex:1,
      backgroundColor:'#342802',   //changed the color
      alignItems: 'center',
      
        } ,
    img: {
      marginTop:150,
      height: 150,   //changed the size
      width:150,
      marginBottom:50,
        },
    text1: {
      color: '#ffffff',
        fontSize: 26,
        marginBottom:7,
    }, 
    text2: {
      color: '#ffffff',
      opacity: 0.3,
      fontSize: 20,
      marginBottom:100,
     
    } ,  
    inputBox: {
      height:44,
      width:294,
      backgroundColor: '#fff',
      borderRadius:8,
      marginBottom: 40,
      padding:3
    }  ,
    ButtonTitle: {
      color:'#ffffff',
      opacity: 0.1
    }  
    })
  
