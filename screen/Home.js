
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation()

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
   // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodeBg}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.qrcode}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />&&       <Button  onPress={() => navigation.navigate('Signup')} title="Open" />
 }
      <Text style={styles.text1}>Scan QR Code To get points</Text>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex:1,
    backgroundColor:'#8E6FB2',
    alignItems: 'center',
    justifyContent: 'center',
    padding:0
      } ,
  barcodeBg: {
    backgroundColor: '#fff',
    height:570,
    width:370,
    borderRadius:15,
    alignItems:'center',
  },
  qrcode: {
    height:400,
    width:300,
    marginTop:50,
    marginBottom: 30,
    alignItems:'center',
    borderRadius:25,

  },
  text1: {
    fontSize: 18,
    color: '#8E6FB2'
  }
 }); 