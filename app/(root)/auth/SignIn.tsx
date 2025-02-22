import { Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Image } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const SignIn = () => {
  const handleHome = () => {
      try {
        router.replace('/(root)/(tabs)');
      } catch (error) {
        console.error('Navigation error:', error);
        Alert.alert('Error', 'Failed to navigate');
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image 
          source={require('../../../assets/images/splash-icon.png')} 
          style={
            {
              width: 200,  // or your desired width
              height: 200, // or your desired height
              resizeMode: 'contain',
              alignSelf: 'center',
              marginTop: '50%'
            }
          }
        />
        
        <Text style={
          {
            fontSize: 25, 
            fontWeight: "bold", 
            // paddingTop: 50, 
            paddingBottom: 10, 
            textAlign: 'center'
          }
        }>Welcome to 
          <Text style={{color: '#FF5B00'}}> FOODRUNNERS</Text>
        </Text>

        <Text style={{textAlign: 'center', fontSize: 18, color: '#101010', paddingBottom: 20}}>Please add your location</Text>

        <TouchableOpacity style={styles.useLocation}>
          <Feather name="map-pin" size={24} color="white" />
          <Text style={styles.useLocationTxt}>Use current location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.manualLocation}>
          <Ionicons name="search" size={24} color="#FF5B00"/>
          <Text style={styles.manualLocationTxt}>Enter location manually</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.manualLocation} onPress={handleHome}>
          {/* <Ionicons name="search" size={24} color="#FF5B00"/> */ }
          <Text style={styles.manualLocationTxt}>hi</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginLeft: 20,
  },
  useLocation: {  
    backgroundColor: '#FF5B00', 
    marginTop: 20, 
    marginLeft: 20, 
    marginRight: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  useLocationTxt: {
    fontWeight: 700, 
    fontFamily: 'sans', 
    textAlign: 'center', 
    padding: 10,
    color: '#FFFFFF'
  },
  manualLocation: {
    // backgroundColor: '#101010', 
    margin: 20,
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF5B00',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  manualLocationTxt: {
    fontWeight: 700, 
    fontFamily: 'sans', 
    textAlign: 'center', 
    color: '#FF5B00', 
    padding: 10,
  }
})