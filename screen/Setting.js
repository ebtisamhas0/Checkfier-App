import React,{useState}  from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Setting() {
    const navigation = useNavigation();

  

    return(
      <View style={styles.container}>
        <Image
        source={require('../assets/user.png')}
        style={{height:130,width:130,top:100}}
        >
       </Image>
       <View style={{height:1, width:300, backgroundColor:'#fff', top:150, opacity:0.5}}></View>
       <View style={styles.help}>
        <Ionicons name='person-outline' size={25} color={'#836C22'}></Ionicons>
        <Text style={{color:'#836C22',fontSize:18,padding:7,marginRight:130}}>Help centre</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Ionicons name='chevron-forward-outline' size={22} color={'#836C22'} ></Ionicons>
        </TouchableOpacity>
</View>
       <View style={styles.about}>
        <Ionicons name='information-circle-outline' size={25} color={'#836C22'}></Ionicons>
        <Text style={{color:'#836C22',fontSize:18,padding:7,marginRight:175}}>About</Text>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Ionicons name='chevron-forward-outline' size={22} color={'#836C22'} ></Ionicons>
        </TouchableOpacity>
       </View>
       <View style={styles.phone}>
        <Ionicons name='call-outline' size={25} color={'#836C22'}></Ionicons>
        <Text style={{color:'#836C22',fontSize:18,padding:7,marginRight:175}}>Phone:</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Change')}>
            <Text style={{fontSize:18,color:'#E4DABB',shadowColor:'#CCCCCC',top:270}}>Change phone number </Text>
        </TouchableOpacity>


        <View style={styles.navContainer}>
               <View style={styles.navBar} >
               <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconBehave} >
               <Ionicons name="home-outline" size={35} color={'#FFFCF1'}/>
               </TouchableOpacity>
               
               <TouchableOpacity >
               <Ionicons name="gift-outline" size={35}color={'#FFFCF1'} onPress={() => navigation.navigate('Rewards2')}/>
               </TouchableOpacity>

               <TouchableOpacity >
               <Ionicons name="settings-outline" size={35}color={'#FFFCF1'} onPress={() => navigation.navigate('Setting')}/>
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
        flexDirection:'column'
    },
    help: {
        height:60,
        width:320,
        backgroundColor:'#FFFCF1',   //changed the color
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        borderRadius:15,
        top:190,
    },
    about: {
        height:60,
        width:320,
        backgroundColor:'#FFFCF1',   //changed the color
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        borderRadius:15,
        top:220,
        
    },
    phone: {
        height:60,
        width:320,
        backgroundColor:'#FFFCF1',   //changed the color
        flexDirection:'row', 
        alignItems:'center',
        padding:10,
        borderRadius:15,
        top:250,
        
    },
    changeNum: {
        height:100,
        width:230,
        backgroundColor:'#fff',
        borderRadius:20
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
