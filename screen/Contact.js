import React,{useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Contact() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.content}>
         <TouchableOpacity onPress={()=>{navigation.navigate('Setting')}}>
        <Ionicons name='arrow-back-outline' size={30} color={'#FBBD0A'}></Ionicons>    
        </TouchableOpacity>
        <Text style={{color:'#fff',marginTop:30,fontSize:22,marginBottom:15}}>Common Questions:</Text>
        <View style={{height:1, width:350, backgroundColor:'#fff', opacity:0.5}}></View>
        <Text style={styles.txt1}>How do I get points?</Text>
        <Text style={styles.txt2}>Every time you log in, you will get points linked to your phone number</Text>
        <View style={{height:1, width:350, backgroundColor:'#fff', opacity:0.5}}></View>
        <Text style={styles.txt1}>How can I redeem my points?</Text>
        <Text style={styles.txt2}>When you get points, you can easily redeem them for coupons and special offers, or get free products</Text>
        <View style={{height:1, width:350, backgroundColor:'#fff', opacity:0.5}}></View>
        <Text style={styles.txt1}>Will I lose my points when I change my phone number?</Text>
        <Text style={styles.txt2}>No, your points will be linked to your new number</Text>
        <View style={{height:1, width:350, backgroundColor:'#fff', opacity:0.5}}></View>
        <Text style={styles.txt1}>Contact us for more help</Text>
        <Text style={styles.txt2}>email: checkfier@gmail.com</Text>




    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#8E6FB2',
        alignItems:'center',
    },
    content: {
      marginTop: 75,
      padding:10
    },
    txt1: {
      marginTop: 20,
      fontSize:20,
      color:'#fff',
      padding:5
    },
   txt2: {
    marginTop: 20,
      fontSize:20,
      color:'#ccc',
      padding:5
   }
})
