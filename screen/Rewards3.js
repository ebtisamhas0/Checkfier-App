import React,{useState}  from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Rewards3() {
  const navigation = useNavigation();
  return(
    //added an image of product named img3
    <View style={styles.container}>
      <View style={styles.points}>
        <Image
        style={styles.img}
        source={require('../assets/coin.png')}/>
        <Text style={{color:'#483307',fontSize:20, marginTop:10,marginLeft:10}} >2500</Text>
      </View>
      <View style={[styles.offers]}>
      <Image
      source={require('../assets/Golden_Brown-02.webp')}
      style={{height:238, width:380, borderRadius:20}}
    />
      </View>
  
      <TouchableOpacity onPress={() => navigation.navigate('Rewards2')}>
       <Text style={styles.walletText}>Reward Wallet</Text>
       <View style={{height:1,width:170,backgroundColor:'#CCC',top:150,left:-85}}></View>

       </TouchableOpacity>
       
      <View style={styles.redeem}>
      <Text style={styles.redeemText}>Redeem</Text>
      <View style={{height:1,width:175,backgroundColor:'#fff',top:149,left:190}}></View>
        <View style={styles.unlockedHover}>
          <Text style={{color:"#fff",fontSize:22}}>5% off entire order</Text>
        </View>
        <View style={styles.unlocked}>
        <Ionicons name="lock-open-outline" size={35} color={"#A53737"}/>
          <Text style={styles.txt2}>Copoun unlocked</Text>
          <Text style={{color:'#483307',fontSize:16,borderColor:'#483307',borderWidth:1,padding:5, borderRadius:15}}>Redeem for 300</Text>

        </View>
        <View style={styles.lockedHover}>
          <Text style={{color:"#fff",fontSize:22}}>10% off entire order</Text>
        </View>
       <View style={styles.locked}>
       <Ionicons name="lock-closed-outline" size={35} color={"#A53737"} />

        <Text style={styles.txt2}>Locked Redeem this at 1000 pts</Text>
       </View>

       </View>
     
     
    
       <View style={styles.navContainer}>
               <View style={styles.navBar} >
               <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconBehave} >
               <Ionicons name="home-outline" size={35}color={'#FFFCF1'} />
               </TouchableOpacity>
               
               <TouchableOpacity >
               <Ionicons name="gift-outline" size={35}color={'#FFFCF1'} onPress={() => navigation.navigate('Rewards2')}/>
               </TouchableOpacity>

               <TouchableOpacity >
               <Ionicons name="settings-outline" size={35} color={'#FFFCF1'}onPress={() => navigation.navigate('Setting')}/>
               </TouchableOpacity>
               </View>
            </View>

    </View>

  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#342802',    //changed the color
        alignItems: 'center',
    },
    points: {
        position: 'absolute',
        backgroundColor: '#FFFCF1',
        alignItems: 'center',
        marginTop: 40,
        height: 50,
        width: 150,
        borderRadius: 30,
        right: 5
    },
   
    offers: {
        height: 250,
        width: 380,
        top:100,
        borderRadius: 20
    },
    //image of product style
    img3: {
      height: 150,
        width: 280,
        top:100,  
    },
    img: {
      position: 'absolute',
      height: 40,
      width: 40,
      left: 6,
      top:3
  },
  walletText: {
    position:'absolute',
    top:120,
    fontSize: 20,
    color:'#CCCCCC',
    opacity:0.8,
    left:-55,
       
},       
 
  unlocked: {
    padding:5,
    width:370,
    height: 70,
    backgroundColor:'#FFE7CF',  //changed color
    opacity:0.8,
    borderRadius:20,
    top: 190 ,
    justifyContent: 'flex-start',
    alignItems:'center',
    flexDirection:'row'
  },
  unlockedHover:{
    width:370,
    height:70,
    borderRadius:20,
    backgroundColor:'#342802',
    opacity:0.3,
    top:185,
    alignItems:'center',
    justifyContent:'center',
    },
    redeemText: {
        position:'absolute',
        top:120,
        fontSize: 20,
        color:'#fff',
        right:55,
        
      },
      lockedHover: {
        width:370,
        height:70,
        borderRadius:20,
        backgroundColor:'#342802',
        opacity:0.2,
        top:200,
        alignItems:'center',
        justifyContent:'center',
        
      },
      locked: {
        padding:5,
        width:370,
        height: 70,
        backgroundColor:'#FFE7CF',  //changed color
        opacity:0.7,
        borderRadius:20,
        top: 200 ,
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection:'row'
      },
      txt2: {
        textAlign: 'center',
        color: '#483307',
        fontSize: 20,
        marginLeft:6,
        marginRight:28
      },
      navContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 20
    },
    navBar: {
        flexDirection: 'row',
        backgroundColor:'rgba(238,238,238,0.3)',
        width: '95%',
        height: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 30
    }
})
