import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../Utils/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import GlobalApi from '../../Utils/GlobalApi'
import CategoryListItem from './CategoryListItem'

const CategoryListScreen = ({ navigation, route }) => {
  const { category } = route?.params
  //   console.log('route', category)
  const [businessList, setBusinessList] = useState([])

  const getBusinessByCategory = () => {
    GlobalApi.getBusinessListByCategory(category).then(response => {
      //   console.log('response:', response.businessLists)
      setBusinessList(response.businessLists)
    })
  }

  useEffect(() => {
    category && getBusinessByCategory()
  }, [category])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.headerContainer}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={styles.title}>{category}</Text>
      </TouchableOpacity>

      {businessList?.length > 0 ? (
        <FlatList
          data={businessList}
          renderItem={({ item, index }) => <CategoryListItem business={item} />}
        />
      ) : (
        <View
          style={{
            marginTop: '20%',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 20 }}>No Business Found</Text>
        </View>
      )}
    </View>
  )
}

export default CategoryListScreen

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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
})
