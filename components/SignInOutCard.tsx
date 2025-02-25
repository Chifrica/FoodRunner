import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Link, Redirect, router, useRouter } from 'expo-router';
import { useGlobalContext } from '@/lib/global-provider';
import { login } from '@/lib/appwrite';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const SignInOutCard = () => {
  const router = useRouter();
  // Just added this files
  const { refetch, loading, isLoggedIn } = useGlobalContext(); 

  if (!loading && isLoggedIn) {
    // return <Redirect href={'/auth/SignIn'} />;
    router.replace('/auth/SignUp');
    return null;
  }

  const handleLogin = async () => {
    const result = await login();

    if (result) {
      refetch();
    } else {
      Alert.alert('Error', 'Failed to login');
    }
  }

  const handleGetStarted = () => {
    router.replace('/auth/SignUp');
  };

  // const handleSignIn = () => {
  //   router.push('/auth/SignIn');
  // };

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
        // Added handleLogin
        onPress={handleLogin}
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