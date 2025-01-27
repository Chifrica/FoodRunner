import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { getStarted } from '@/constants/data'
import { SafeAreaView } from 'react-native'
import { ScrollView, Image } from 'react-native'

const { width } = Dimensions.get('window')

const SignUp = () => {
   return (
          <SafeAreaView
          >
      
                  {
                      getStarted.map((slide, index) =>
                          <View key={index} style={{width}}>
                              <Image 
                                  key={index}
                                  resizeMode='cover'
                                  source={slide.image}
                                  style={{
                                      width: width,
                                      height: 400
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

                  <Text>Already have an account</Text>
          </SafeAreaView>
      )
}

export default SignUp