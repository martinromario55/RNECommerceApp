import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../Utils/Colors'
import Heading from '../../components/Heading'

const BusinessDetailsScreen = ({ navigation, route }) => {
  //   console.log('route:', route.params)
  const params = route.params
  const [business, setBusiness] = useState(params.business)

  //   console.log('params', params.business)
  return (
    <View>
      {business ? (
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.btnIcon}
          >
            <Ionicons
              name="arrow-back-outline"
              size={30}
              color={Colors.PRIMARY}
            />
          </TouchableOpacity>
          <Image
            source={{ uri: business?.images[0]?.url }}
            style={{ width: '100%', height: 300 }}
          />
          <View style={styles.infoContainer}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
              {business?.title}
            </Text>
            <View style={styles.subContainer}>
              <Text style={styles.contact}>{business?.contactPerson}</Text>
              <Text style={styles.category}>{business?.category.name}</Text>
            </View>
            <Text style={styles.address}>
              <Ionicons
                name="location-sharp"
                size={30}
                color={Colors.PRIMARY}
              />
              {business?.address}
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.LIGHT_GRAY,
                marginVertical: 20,
              }}
            ></View>
          </View>
          <View style={styles.about}>
            <Heading title={'About'} />
            <Text style={styles.aboutText}>{business?.about}</Text>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.messageBtn}>
              <Text style={styles.messageTextBtn}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookingBtn}>
              <Text style={styles.bookingTextBtn}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.about}>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  )
}

export default BusinessDetailsScreen

const styles = StyleSheet.create({
  infoContainer: {
    padding: 10,
    gap: 7,
  },
  btnIcon: {
    position: 'absolute',
    zIndex: 10,
    padding: 20,
  },
  contact: {
    fontSize: 19,
    color: Colors.PRIMARY,
    fontWeight: '500',
  },
  category: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.PRIMARY,
    backgroundColor: Colors.PRIMARY_LIGHT,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  address: {
    fontSize: 17,
    color: Colors.DARK_GRAY,
  },
  subContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  about: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  aboutText: {
    fontSize: 17,
    color: Colors.DARK_GRAY,
  },
  messageBtn: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 99,
    flex: 1,
  },
  messageTextBtn: {
    textAlign: 'center',
    fontSize: 17,
    color: Colors.PRIMARY,
  },
  bookingBtn: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 99,
    flex: 1,
  },
  bookingTextBtn: {
    textAlign: 'center',
    fontSize: 17,
    color: Colors.WHITE,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
    marginVertical: 20,
  },
})
