import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import GetStarted from '@/app/(root)/auth/GetStarted';
import { Link, router } from 'expo-router';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const SignInOutCard = () => {
  const handleGetStarted = () => {
    router.push('/(root)/auth/GetStarted');
  };

  const handleSignIn = () => {
    router.push('/auth/SignIn');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.getStarted} 
        onPress={handleGetStarted}
      >
        <Text style={styles.getStartedTxt}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.signin} 
        onPress={handleSignIn}
      >
        <Text style={styles.signinTxt}>Sign in</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#30AB6A', 
        marginTop: 10, 
        paddingTop: 20,
        height: height, 
        width: width,
    },
    getStarted: {
        backgroundColor: '#FF5B00', 
        marginTop: 20, 
        marginLeft: 20, 
        marginRight: 20,
        borderRadius: 8
    },
    getStartedTxt: {
        fontWeight: 700, 
        fontFamily: 'sans', 
        textAlign: 'center', 
        padding: 10,
        color: '#FFFFFF'
    },
    signin: {
        // backgroundColor: '#101010', 
        margin: 20,
        marginTop: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5B00'
    },
    signinTxt: {
        fontWeight: 700, 
        fontFamily: 'sans', 
        textAlign: 'center', 
        color: '#101010', 
        padding: 10,
    }
})