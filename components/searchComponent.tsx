import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


const SearchComponent = () => {
  return (
    <View style={styles.searchContainer}>
        <Ionicons 
            name="search-outline" 
            size={24} 
            color="#666876" 
            style={styles.searchIcon}
        />
        <TextInput
            placeholder="Search for food or restaurants"
            placeholderTextColor="#F9F9F9"
            style={styles.searchInput}
        />
    </View>
  )
}

export default SearchComponent

const styles = StyleSheet.create ({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#98A1B2',
        marginHorizontal: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginTop: 10
      },
      searchIcon: {
        marginRight: 10
      },
      searchInput: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 14,
        color: '#000',
      }
})