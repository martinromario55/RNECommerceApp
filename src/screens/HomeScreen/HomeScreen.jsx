import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Categories from './components/Categories'
import BusinessList from './components/BusinessList'

const HomeScreen = () => {
  return (
    <View>
      {/* Header */}
      <Header />
      {/* Slider */}
      <Slider />
      {/* Categories */}
      <Categories />
      {/* BusinessList */}
      <BusinessList />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
