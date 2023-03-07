import React,{useState}  from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,TextInput,ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Change() { 
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();
    const changeNumber = ()=>{
      setIsLoading(true)
        fetch("http://05f2-151-255-138-72.ngrok.io/update",{
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
          console.log(err)
          alert(err)
        })
      }
        const NavigatTo = ()=>{
          navigation.navigate('Setting')
        }
      
    return(
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={{color:'#342802',marginBottom:40,fontSize:22}}>Enter new number:</Text>
            <TextInput style={styles.inputBox}
            placeholder="  +966"
            onChangeText={phone => setPhone({phone})}
            />
            <ActivityIndicator size={'large'} color='#FBBD0A' animating={isLoading}/>

            <TouchableOpacity onPress={() => changeNumber() }>
            <EvilIcons name='arrow-right' size={55} color='#FBBD0A'></EvilIcons>
          
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrow} onPress={()=>{navigation.navigate('Setting')}}>
      <Ionicons name='arrow-back-outline' size={30} color={'#FBBD0A'} ></Ionicons>    
      </TouchableOpacity>
        </View>
        </View>

    )
    }
    
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#342802',  //changed the color
        alignItems: 'center',
        flexDirection:'column',
        justifyContent:'center'
    },
    box: {
        backgroundColor: '#FFFCF1',
        height:480,
        width:370,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center'
        
      },
      inputBox: {
        height:44,
        width:294,
        backgroundColor: '#ccc',
        opacity:0.8,
        borderRadius:8,
        marginBottom: 30,
        padding:3,
      }  ,
    arrow: {
      display:'flex',
      marginRight: 250,
      bottom: -60
      }
})
