import { View, Text, Image, Dimensions, ScrollView, StyleSheet, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { slides } from '@/constants/data'
import { SignInOutCard } from '@/components/SignInOutCard'
import GlobalProvider from '@/lib/global-provider'

const { width } = Dimensions.get('window')

const OnboardingScreen = () => {
    const [imgActive, setImgActive] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);


    useEffect(() => {
        const interval = setInterval(() => {
            setImgActive((prevIndex) => {
                const nextIndex = (prevIndex + 1) % slides.length;
                scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
                return nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [imgActive]);
    
    const onchange = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setImgActive(currentIndex);
    };

  return (
    <SafeAreaView>
        <ScrollView 
            onScroll={onchange}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            ref={scrollViewRef}
            scrollEventThrottle={16}
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
                                height: 500
                            }}
                        />

                        <View style={{marginTop: 2, alignItems: 'center'}}>
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
                    <Text key={index} style={imgActive == index ? styles.dotActive : styles.dotInActive}>
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
    dotInActive: {
        margin: 3,
        color: '#D6D6D6',
        fontSize: 20
    }
})

