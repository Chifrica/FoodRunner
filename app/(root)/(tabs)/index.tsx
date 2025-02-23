import { View, StyleSheet, Text, SafeAreaView, ScrollView, TextInput, Image } from 'react-native'
import React from 'react'
import HomeHeader from '@/components/homeHeader';
import SearchComponent from '@/components/searchComponent';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>

        <HomeHeader />

        <SearchComponent />

        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
          <View>
            <Image source={require('../../../assets/images/breakFast (1).png')} style={{width: 50, height: 50}} />
            <Text>Breakfast</Text>
          </View>
          <View>
            <Image source={require('../../../assets/images/lunch.png')} style={{width: 50, height: 50}} />
            <Text>Lunch</Text>
          </View>
          <View>
            <Image source={require('../../../assets/images/dinner.png')} style={{width: 50, height: 50}} />
            <Text>Dinner</Text>
          </View>
          <View>
            <Image source={require('../../../assets/images/igbos.png')} style={{width: 50, height: 50}} />
            <Text>Igbos</Text>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
  
})