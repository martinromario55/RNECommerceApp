import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'

const CategoryListItem = ({ business, booking }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.push('business-detail', { business })}
      style={styles.container}
    >
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.contact}>{business?.contactPerson}</Text>
        <Text style={styles.title}>{business?.title}</Text>
        {booking?.id ? (
          <View>
            <Text
              style={[
                styles.bookingText,
                booking?.bookingStatus == 'InProgress'
                  ? { backgroundColor: Colors.LIGHT_GRAY }
                  : booking?.bookingStatus == 'Completed'
                  ? { backgroundColor: Colors.LIGHT_GREEN }
                  : booking?.bookingStatus == 'Canceled'
                  ? { backgroundColor: Colors.RED, color: 'red' }
                  : {},
              ]}
            >
              {booking?.bookingStatus}
            </Text>
            <Text style={[styles.bookingDateTime]}>
              <FontAwesome name="calendar" size={24} color={Colors.PRIMARY} />{' '}
              {booking?.date} at {booking?.time}
            </Text>
          </View>
        ) : (
          <Text style={styles.address}>
            <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} />
            {business?.address}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default CategoryListItem

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginVertical: 15,
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  content: {
    gap: 7,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  contact: {
    fontSize: 19,
    color: 'grey',
    fontWeight: '500',
  },
  address: {
    fontSize: 19,
    color: 'grey',
  },
  bookingText: {
    fontSize: 14,
    color: Colors.PRIMARY,
    fontWeight: '500',
    backgroundColor: Colors.PRIMARY_LIGHT,
    alignSelf: 'flex-start',
    borderRadius: 5,
    padding: 7,
  },
  bookingDateTime: {
    fontSize: 14,
    color: Colors.LIGHT_GRAY,
    fontWeight: '500',
    marginTop: 10,
  },
})
