import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../Utils/Colors'

const BusinessListItem = ({ business }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{business?.title}</Text>
        <Text style={styles.contact}>{business?.contactPerson}</Text>
        <Text style={styles.category}>{business?.category.name}</Text>
      </View>
    </View>
  )
}

export default BusinessListItem

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
  content: {
    padding: 7,
    gap: 3,
  },
  title: {
    fontSize: 16,
  },
  contact: {
    fontSize: 14,
    color: Colors.LIGHT_GRAY,
  },
  category: {
    fontSize: 10,
    padding: 3,
    backgroundColor: Colors.PRIMARY_LIGHT,
    color: Colors.PRIMARY,
    borderRadius: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
  },
})
