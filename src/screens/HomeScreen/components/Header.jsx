import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../../Utils/Colors'
import { FontAwesome } from '@expo/vector-icons'

const Header = () => {
  const { user, isLoading } = useUser()

  //   console.log(user)
  return (
    user && (
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <View style={styles.profileStyle}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontSize: 16,
                }}
              >
                Welcome,
              </Text>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontSize: 16,
                }}
              >
                {user?.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={24} color={Colors.WHITE} />
        </View>

        {/* Search Bar Section */}
        <View style={styles.searchBarContainer}>
          <TextInput placeholder="Search.." style={styles.textInput} />
          <TouchableOpacity style={styles.searchBtn}>
            <FontAwesome name="search" size={24} color={Colors.PRIMARY} />
          </TouchableOpacity>
        </View>
      </View>
    )
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 15,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    borderColor: Colors.WHITE,
    borderWidth: 1,
    width: '85%',
    fontSize: 16,
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 15,
  },
})
