import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../../components/Heading'
import GlobalApi from '../../../Utils/GlobalApi'
import BusinessListItem from './BusinessListItem'

const BusinessList = () => {
  const [businessList, setBusinessList] = useState([])
  const getBusinessList = () => {
    GlobalApi.getBusinessList().then(response => {
      //   console.log('response:', response.businessLists)
      setBusinessList(response.businessLists)
    })
  }

  useEffect(() => {
    getBusinessList()
  }, [])

  //   console.log('businesslist:', businessList)
  return (
    <View style={styles.container}>
      <Heading title={'Latest Business'} isViewAll={true} />

      <FlatList
        data={businessList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item?.id}
        renderItem={({ item, index }) => (
          <View style={{ marginHorizontal: 10 }}>
            <BusinessListItem business={item} />
          </View>
        )}
      />
    </View>
  )
}

export default BusinessList

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
})
