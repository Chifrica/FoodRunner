import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';



const TabIcon = ({ icon, focused, title } : { icon: any; focused: boolean; title: string })=> {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 5, height: 50  }}>
        {icon}
        <Text style={{ 
            color: focused ? '#FF5B00' : '#666876',
            fontSize: 10,
            textAlign: 'center',
            fontWeight: '500',
            width: '130%',
        }} numberOfLines={1}>
            {title}
        </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'white',
                borderTopColor: '#0061FF1A',
                borderTopWidth: 1,
                height: 60,
                paddingHorizontal: 5,
                paddingBottom: 5,
                paddingTop: 5 
            }, 
        }}
    >
        <Tabs.Screen
            name="index" 
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon 
                        icon={<Ionicons name="home" size={24} color={focused ? '#FF5B00' : '#666876'}/>}
                        focused={focused} 
                        title="Home" 
                    />
                )
            }}
        />

        <Tabs.Screen
            name="order" 
            options={{
                title: 'Orders',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        icon={<Ionicons name="receipt-outline" size={24} color={focused ? '#FF5B00' : '#666876'}/>} 
                        focused={focused} 
                        title="Orders" 
                    />
                )
            }}
        />

        <Tabs.Screen
            name="schedule" 
            options={{
                title: 'Schedule',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        icon={<Ionicons name="calendar-outline" size={24} color={focused ? '#FF5B00' : '#666876'}/>} 
                        focused={focused} 
                        title="Schedule" 
                    />
                )
            }}
        />

        <Tabs.Screen
            name="support" 
            options={{
                title: 'Support',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        icon={<Ionicons name="help-circle-outline" size={24} color={focused ? '#FF5B00' : '#666876'}/>} 
                        focused={focused} 
                        title="Support" 
                    />
                )
            }}
        />

        <Tabs.Screen
            name="profile" 
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        icon={<Ionicons name="person-outline" size={24} color={focused ? '#FF5B00' : '#666876'}/>} 
                        focused={focused} 
                        title="Profile" 
                    />
                )
            }}
        />
    </Tabs>
  )
}

export default TabsLayout;