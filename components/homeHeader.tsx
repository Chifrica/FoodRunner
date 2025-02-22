import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const HomeHeader = () => {
  return (
    <View style={{justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={style.location}>
              <Ionicons name="location-outline" size={30} color="white" style={{ alignSelf: 'center' }} />
            </View>
            <View style={{paddingLeft: 10}}>
              <Text style={{fontSize: 15, color: 'gray'}}>Delivery Location</Text>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>Fajuyi, Ado-Ekiti</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{backgroundColor: 'yellow', borderRadius: 50, padding: 5, width: 45, height: 45}}>
              <MaterialCommunityIcons name="cart-outline" size={30} style={{ alignSelf: 'center' }} />
            </View>
            <Ionicons name='notifications-outline' size={30} style={{ alignSelf: 'center'}} />
          </View> 
        </View>
  )
}

export default HomeHeader;

const style = StyleSheet.create({
    location: {
      backgroundColor: '#FF5B00',
      borderRadius: 50,
      padding: 5,
      width: 45,
      height: 45,
    }
  })