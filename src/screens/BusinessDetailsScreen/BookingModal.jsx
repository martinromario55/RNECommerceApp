import {
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import CalendarPicker from 'react-native-calendar-picker'
import Colors from '../../Utils/Colors'
import Heading from '../../components/Heading'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import moment from 'moment'

const BookingModal = ({ businessId, hideModal }) => {
  const [timeList, setTimeList] = useState()
  const [selectedTime, setSelectedTime] = useState()
  const [selectedDate, setSelectedDate] = useState()
  const [note, setNote] = useState()
  const { user } = useUser()

  const getTime = () => {
    const timeList = []
    for (let i = 8; i < 12; i++) {
      timeList.push({
        time: i + ':00 AM',
      })
      timeList.push({
        time: i + ':30 AM',
      })
    }
    for (let i = 1; i < 7; i++) {
      timeList.push({
        time: i + ':00 PM',
      })
      timeList.push({
        time: i + ':30 PM',
      })
    }
    setTimeList(timeList)
  }

  useEffect(() => {
    getTime()
  }, [])

  //   Create Booking Method
  const createNewBooking = () => {
    if (!selectedDate || !selectedTime) {
      ToastAndroid.show('Please select a date and time', ToastAndroid.SHORT)
      return
    }
    const data = {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress.emailAddress,
      date: moment(selectedDate).format('DD-MMM-yyyy'),
      time: selectedTime,
      businessId: businessId,
    }
    // console.log('Data', data)
    GlobalApi.createBooking(data).then(response => {
      //   console.log('Response:', response)
      ToastAndroid.show('Booking Created Successfully!', ToastAndroid.LONG)
      hideModal()
    })
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => hideModal()}
        >
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>

        {/* Calendar Section */}
        <Heading title={'Select Date'} />
        <View style={styles.calendarContainer}>
          <CalendarPicker
            onDateChange={setSelectedDate}
            width={340}
            minDate={Date.now()}
          />
        </View>

        {/* Time Select section */}
        <View style={{ marginTop: 20 }}>
          <Heading title={'Select Time'} />
          <FlatList
            data={timeList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ marginRight: 5 }}
                onPress={() => setSelectedTime(item.time)}
              >
                <Text
                  style={[
                    selectedTime == item.time
                      ? styles.selectedTime
                      : styles.unselectedTime,
                  ]}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* Note Section */}
        <View style={{ marginTop: 20 }}>
          <Heading title={'Write a Note'} />
          <TextInput
            placeholder="Note"
            style={styles.noteTextArea}
            numberOfLines={4}
            multiline={true}
            onChange={text => setNote(text)}
          />
        </View>
        {/* Confirem Button */}
        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={() => createNewBooking()}
        >
          <Text style={styles.btnText}>Confirm & Book</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default BookingModal

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  calendarContainer: {
    backgroundColor: Colors.PRIMARY_LIGHT,
    padding: 10,
    borderRadius: 10,
  },
  unselectedTime: {
    borderColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 99,
    color: Colors.PRIMARY,
  },
  selectedTime: {
    borderColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 99,
    color: Colors.WHITE,
    backgroundColor: Colors.PRIMARY,
  },
  noteTextArea: {
    borderWidth: 1,
    borderRadius: 15,
    textAlignVertical: 'top',
    padding: 10,
    fontSize: 17,
    color: Colors.DARK_GRAY,
    borderColor: Colors.PRIMARY_LIGHT,
  },
  confirmBtn: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 99,
    marginTop: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 17,
    color: Colors.WHITE,
  },
})
