import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Heading from '../../components/Heading'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors'

const ProfileScreen = () => {
  const profileMenu = [
    {
      id: 1,
      name: 'Home',
      icon: 'home',
    },
    {
      id: 2,
      name: 'My Booking',
      icon: 'bookmark-sharp',
    },
    {
      id: 3,
      name: 'Logout',
      icon: 'log-out',
    },
  ]
  const { user } = useUser()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Heading title={'Profile'} />

        <View style={styles.image}>
          <Image
            source={{ uri: user.imageUrl }}
            style={{ width: 70, height: 70, borderRadius: 40 }}
          />
          <Text style={styles.name}>{user.fullName}</Text>
          <Text style={styles.email}>
            {user.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>

      <View>
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <View style={styles.icons}>
              <Ionicons
                name={item.icon}
                size={35}
                color={Colors.PRIMARY}
                style={styles.icon}
              />
              <Text style={styles.title}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: Colors.PRIMARY,
    padding: 20,
    borderRadius: 10,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.WHITE,
    marginTop: 10,
  },
  email: {
    fontSize: 17,
    color: Colors.WHITE,
    marginTop: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    padding: 20,
  },
})
