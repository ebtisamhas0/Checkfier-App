import React,{useState}  from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Rewards2() {
  const [shouldShow, setShouldShow] = useState(true);
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <View style={styles.points}>
        <Image
        style={styles.img}
        source={require('../assets/coin.png')}/>
      </View>
      <LinearGradient
       colors={['#9074B0', '#78599C']}
       style={[styles.offers]}>

      </LinearGradient>
     
      
      
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
               <Ionicons name="home-outline" size={35} />
               </TouchableOpacity>
               
               <TouchableOpacity >
               <Ionicons name="gift-outline" size={35} onPress={() => navigation.navigate('Rewards2')}/>
               </TouchableOpacity>

               <TouchableOpacity >
               <Ionicons name="settings-outline" size={35} onPress={() => navigation.navigate('Setting')}/>
               </TouchableOpacity>
               </View>
            </View>

    </View>

  )
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8E6FB2', 
        alignItems: 'center',
    },
    points: {
        position: 'absolute',
        backgroundColor: '#eee',
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
    walletText: {
        position:'absolute',
        top:120,
        fontSize: 20,
        color:'#fff',
        left:25,
     
    },
    copoun1: {
      width:380,
      height: 170,
      backgroundColor:'#9074B0' ,
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
      color: '#fff',
      fontSize: 20,
      
    },
    copoun2: {
      width:380,
      height: 170,
      backgroundColor:'#9074B0',
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
      backgroundColor:'#eee',
      opacity: 0.3,
      width: '95%',
      height: 50,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderRadius: 30
  }
 })
 