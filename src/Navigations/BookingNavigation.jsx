import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BookingScreen from '../screens/Booking/BookingScreen'
import BusinessDetailsScreen from '../screens/BusinessDetailsScreen/BusinessDetailsScreen'

const Stack = createStackNavigator()

const BookingNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="booking" component={BookingScreen} />
      <Stack.Screen name="business-detail" component={BusinessDetailsScreen} />
    </Stack.Navigator>
  )
}

export default BookingNavigation
