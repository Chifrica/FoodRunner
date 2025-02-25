import { View, StyleSheet, Text, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeHeader from '@/components/homeHeader';
import SearchComponent from '@/components/searchComponent';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <SearchComponent />

        <View style={styles.promoContainer}>
          <View style={styles.promoTextContainer}>
            <Text style={styles.promoTitle}>Pepperoni</Text>
            <Text style={styles.promoSubtitle}>50% OFF</Text>
            <Text style={styles.promoDescription}>Order from Pepperoni & get 50% off delivery</Text>
            <TouchableOpacity style={styles.orderButton}>    
              <Text style={styles.orderButtonText}>Order Now!</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.promoImageContainer}>
            <Image 
              source={require('../../../assets/images/fried_plantain_and_fried_scrambled_eggs.png')} 
              style={styles.promoImage} 
            />
          </View>
        </View>

        <View style={styles.categoriesContainer}>
          <View style={styles.categoryItem}>
            <Image source={require('../../../assets/images/breakFast (1).png')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Breakfast</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={require('../../../assets/images/lunch.png')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Lunch</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={require('../../../assets/images/dinner.png')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Dinner</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={require('../../../assets/images/igbos.png')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Igbos</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  promoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: '#FF5B00',
    padding: 10,
    borderRadius: 10
  },
  promoTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
    marginRight: 20
  },
  promoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  promoSubtitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  promoDescription: {
    color: '#fff'
  },
  orderButton: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 10,
    alignSelf: 'flex-start' 
  },
  orderButtonText: {
    fontWeight: 'bold',
    fontSize: 20, 
  },
  promoImageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#FFFFFF',
    borderWidth: 7,
  },
  promoImage: {
    width: '100%',
    height: 100, 
    resizeMode: 'cover'
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  categoryItem: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    borderColor: '#98A1B2',
    borderWidth: 3,
  },
  categoryImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  categoryText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '500',
    color: '#333'
  }
})