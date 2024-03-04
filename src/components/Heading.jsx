import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function Heading({ title, isViewAll }) {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{title}</Text>
      {isViewAll && <Text style={styles.headerText}>View All</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
})
