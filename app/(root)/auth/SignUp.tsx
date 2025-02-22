import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { getStarted } from '@/constants/data'
import { SafeAreaView } from 'react-native'
import { ScrollView, Image } from 'react-native'
import { router } from 'expo-router'
import { login } from '@/lib/appwrite'
import { Ionicons } from '@expo/vector-icons'


const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const SignUp = () => {
    const handleSignIn = () => {
        router.replace('/auth/SignIn');
    }

    const handleLogin = async () => {
        try {
            const result = await login();

            if(result) {
                console.log('Login successful');
                router.push('/(tabs)');
            } else {
                Alert.alert('Error', 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            Alert.alert('Error', 'An unexpected error occurred');
        }
    }
   return (
          <SafeAreaView
          >
      
                  <ScrollView contentContainerStyle={{height: height}}>
                    {
                        getStarted.map((slide, index) =>
                            <View key={index} style={{width}}>
                                <Image 
                                    key={index}
                                    resizeMode='cover'
                                    source={slide.image}
                                    style={{
                                        width: width,
                                        height: 300
                                    }}
                                />
        
                                <View style={{marginTop: 10, alignItems: 'center'}}>
                                    <Text style={{fontWeight: '700', fontSize: 20, fontFamily: 'sans', textAlign: 'center', padding: 10}}>          
                                        {typeof slide.title == 'string' ? (
                                            slide.title
                                        ) : (
                                            <>
                                                {slide.title.firstPart}
                                                <Text style={{color: slide.title.highlightColor}}>
                                                    {slide.title.secondPart}
                                                </Text>
                                            </>
                                        ) }
                                    </Text>
                                    <Text style={{textAlign: 'center', fontSize: 17, color: "gray", padding: 10}}>          
                                        {slide.description}
                                    </Text>
                                </View>
                            </View>    
                        )
                    }

                    <View> 
                        <View style={styles.container}>
                            <TouchableOpacity 
                                style={styles.btn} 
                                //   onPress={handleGetStarted}
                            >
                                <View style={{ 
                                    flexDirection: 'row', 
                                    alignItems: 'center',
                                    justifyContent: 'center' 
                                }}> 
                                    
                                    <Ionicons name="mail" size={24} color="#FF5B00" />

                                    <Text style={[styles.btnTxt, { margin: 5 }]}>Sign up with Email</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.container}>
                            <TouchableOpacity 
                                style={styles.btn} 
                                  onPress={handleLogin}
                            >
                                <View style={{ 
                                    flexDirection: 'row', 
                                    alignItems: 'center',
                                    justifyContent: 'center' 
                                }}> 
                                    <Image 
                                        resizeMode='cover'
                                        source={require('../../../assets/icons/google.png')}
                                        style={{
                                            width: 24,
                                            height: 24
                                        }}
                                    />

                                    {/* <Ionicons name="logo-google" size={24} color="rgb(249, 1, 1)" /> */}

                                    <Text style={[styles.btnTxt, { margin: 5 }]}>Sign up with Google</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.container}>
                            <TouchableOpacity 
                                style={styles.btn} 
                                //   onPress={handleGetStarted}
                            >
                                <View style={{ 
                                    flexDirection: 'row', 
                                    alignItems: 'center',
                                    justifyContent: 'center' 
                                }}> 

                                    <Ionicons name="logo-apple" size={24} color="black" />

                                    <Text style={[styles.btnTxt, { margin: 5 }]}>Sign up with Apple</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={styles.txt}>Already have an account?{`  `} 
                        <Text style={styles.txtBtn} onPress={handleSignIn}> 
                            Sign In
                        </Text>
                    </Text>
                  </ScrollView>
          </SafeAreaView>
      )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        width: width,
    },
    txt: {
        textAlign: 'center',
        fontSize: 17,
        fontFamily: 'sans',
        padding: 10,
        marginTop: 50,
    },
    txtBtn: {
        color: '#FF5B00',
        fontWeight: '700',
    },
    btn: {
        marginTop: 20, 
        marginLeft: 20, 
        marginRight: 20,
        borderRadius: 8,
        borderColor: '#101010',
        borderWidth: 0.3,
    },
    btnTxt: {
        fontWeight: 700, 
        fontFamily: 'sans', 
        textAlign: 'center', 
        paddingLeft: 10,
        fontSize: 16,
        color: '#000',
        lineHeight: 24,
    },
});