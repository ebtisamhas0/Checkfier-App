import React,{useState}  from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView,ScrollView, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Rewards2() {
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

      <View style={styles.wallet}>
        <Text style={styles.walletText}>Reward Wallet</Text>
        <View style={{height:1,width:180,backgroundColor:'#fff',top:150}}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Rewards3')} >
       <Text style={styles.redeemText}>Redeem</Text>
       <View style={{height:1,width:180,backgroundColor:'#CCC',top:149, left:190}}></View>

       </TouchableOpacity>
      
        <View style={styles.copoun1}>
          <Image
          source={require('../assets/reward.png')}
          style={styles.img2}
          ></Image>
          <Text style={styles.txt2}>10% off your next order</Text>
        </View>
       <View style={styles.copoun2}>
        <Image
        source={require('../assets/medal.png')}
        style={styles.img2}
        ></Image>
        <Text style={styles.txt2}>15% off your next order</Text>
       </View>

       </View>
      
    
       <View style={styles.navContainer}>
               <View style={styles.navBar} >
               <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconBehave} >
               <Ionicons name="home-outline" size={35} color={'#FFFCF1'}/>
               </TouchableOpacity>
               
               <TouchableOpacity >
               <Ionicons name="gift-outline" size={35} color={'#FFFCF1'} onPress={() => navigation.navigate('Rewards2')}/>
               </TouchableOpacity>

               <TouchableOpacity >
               <Ionicons name="settings-outline" size={35} color={'#FFFCF1'} onPress={() => navigation.navigate('Setting')}/>
               </TouchableOpacity>
               </View>
            </View>

    </View>

  )
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#342802',   //changed the color
        alignItems: 'center',
    },
    points: {
        position: 'absolute',
        backgroundColor: '#FFFCF1',
        alignItems: 'center',
        marginTop: 45,
        height: 50,
        width: 150,
        borderRadius: 30,
        right: 5
    },
    img: {
        position: 'absolute',
        height: 40,
        width: 40,
        left: 6,
        top:3
    },
    offers: {
        height: 230,
        width: 380,
        top:110,
        borderRadius: 20

    }, 
    //image of product style
    img3: {
      height: 150,
        width: 280,
        top:110,  
    },
    walletText: {
        position:'absolute',
        top:120,
        fontSize: 20,
        color:'#FFFCF1',
        left:25,
     
    },
    copoun1: {
      width:380,
      height: 170,
      backgroundColor:'#FFE7CF' ,  //changed color
      opacity:0.8,
      borderRadius:20,
      top: 170 ,
      justifyContent: 'center',
      alignItems:'center',
      flexDirection:'row'
    },
    img2: {
      width:80,
      height:83,
      marginTop: 3
    },
    txt2: {
      textAlign: 'center',
      color: '#483307',
      fontSize: 22,
      
    },
    copoun2: {
      width:380,
      height: 170,
      backgroundColor:'#FFE7CF',  //changed color
      opacity:0.8,
      borderRadius:20,
      top: 200 ,
      justifyContent: 'center',
      alignItems:'center',
      flexDirection:'row'
    },
   
    redeemText: {
      position:'absolute',
        top:120,
        fontSize: 20,
        color:'#CCCCCC',
        opacity:0.7,
        right:55,
        
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
  },
  wrap: {
    width:380,
    height:280 
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dotActive: {
    margin: 3,
    color: '#ccc'
  },
  dot: {
    margin: 3,
    color: '#fff'
  }
 })
 
