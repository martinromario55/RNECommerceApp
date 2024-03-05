import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import CategoryListItem from '../CategoryListScreen/CategoryListItem'

const BookingScreen = () => {
  const { user } = useUser()
  const [bookingList, setBookingList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    user && getuserBookings()
  }, [user])

  const getuserBookings = () => {
    setLoading(true)
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(
      response => {
        // console.log('Response:', response)
        setBookingList(response.bookings)
        setLoading(false)
      }
    )
  }

  // console.log('BookingList:', bookingList)
  return (
    <View style={styles.container}>
      <Heading title={'My Bookings'} />

      <View>
        {bookingList.length > 0 && (
          <FlatList
            data={bookingList}
            onRefresh={() => getuserBookings()}
            refreshing={loading}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <CategoryListItem business={item?.business} booking={item} />
            )}
          />
        )}
      </View>
    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
})
