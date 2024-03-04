import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CategoryListScreen from '../screens/CategoryListScreen/CategoryListScreen'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import BusinessDetailsScreen from '../screens/BusinessDetailsScreen/BusinessDetailsScreen'

const Stack = createStackNavigator()

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="category-list" component={CategoryListScreen} />
      <Stack.Screen name="business-detail" component={BusinessDetailsScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigation
