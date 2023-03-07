import React  from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Rewards1() {
    const navigation = useNavigation()
    return (
        
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require('../assets/rewards1.png')} />
            
            <Text style={styles.text1}>
                With Golden Brown CheckIn you can earn rewards from any store at anytime!
            </Text>
            <Image
            style={styles.img2}
            source={require('../assets/coin.png')}/>

            <View style={styles.navContainer}>
               <View style={styles.navBar} >
               <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconBehave} >
               <Ionicons name="home-outline" size={35} color={'#FFFCF1'} />
               </TouchableOpacity>
               
               <TouchableOpacity >
               <Ionicons name="gift-outline" size={35} color={'#FFFCF1'} onPress={() => navigation.navigate('Rewards2')}/>
               </TouchableOpacity>

               <TouchableOpacity >
               <Ionicons name="settings-outline" size={35} color={'#FFFCF1'} onPress={() => navigation.navigate('Setting')} />
               </TouchableOpacity>
               </View>
            </View>

    </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#342802',  //changed the color
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
    },
    img: {
        position: 'absolute',
        width: 260,
        height: 260,
        left: 59,
        top: 126,
    },
    text1: {
        marginTop: 57,
        textAlign: 'center',
        fontSize: 26,
        color: '#ffffff'
    },
    img2: {
        position: 'absolute',
        width: 80,
        height: 80,
        bottom: 120
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
    iconBehave: {
        color: '#8E6FB2',
        opacity: 1
    }
});



















