import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../Utils/GlobalApi'
import Colors from '../../../Utils/Colors'
import Heading from '../../../components/Heading'
import { useNavigation } from '@react-navigation/native'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const navigation = useNavigation()

  const getCategory = () => {
    GlobalApi.getCategories().then(response => {
      //   console.log('response:', response.categories)
      setCategories(response?.categories)
    })
  }

  useEffect(() => {
    getCategory()
  }, [])
  return (
    <View style={styles.container}>
      <Heading title={'Categories'} isViewAll={true} />

      <FlatList
        data={categories}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              navigation.push('category-list', { category: item.name })
            }}
          >
            <View style={styles.sliderImage}>
              <Image
                source={{ uri: item?.icon?.url }}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <Text style={{ marginTop: 5 }}>{item?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  sliderImage: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
})
