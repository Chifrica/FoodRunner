import { View, Text, Image, Dimensions, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { slides } from '@/constants/data'
import { SignInOutCard } from '@/components/SignInOutCard'
import GlobalProvider from '@/lib/global-provider'

const { width } = Dimensions.get('window')

const OnboardingScreen = () => {
    const [imgActive, setImgActive] = useState(0);
    

    const onchange = (nativeEvent: any) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive){
                setImgActive(slide)
            }
        }
    };

  return (
    <SafeAreaView>
        <ScrollView 
        onScroll={({nativeEvent}) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        >

            {
                slides.map((slide, index) =>
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
                                        {slide.title}
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
        </ScrollView>

        <View style={styles.dotContainer}>
            {
                slides.map((slide, index) => 
                    <Text key={index} style={imgActive == index ? styles.dotActive : styles.dot}>
                        ●
                    </Text>
                )
            }
        </View>
        
        <GlobalProvider>
            <SignInOutCard />
        </GlobalProvider>

    </SafeAreaView>
  )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    dotContainer: {
        position: 'relative', 
        bottom: 0, 
        flexDirection: 'row', 
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: '#FF5B00',
        fontSize: 20
    },
    dot: {
        margin: 3,
        color: '#D6D6D6',
        fontSize: 20
    }
})

