import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../Utils/GlobalApi'
import Colors from '../../../Utils/Colors'
import Heading from '../../../components/Heading'

const Slider = () => {
  const [slider, setSlider] = useState()
  const getSliders = () => {
    GlobalApi.getSlider().then(response => {
      //   console.log('response:', response.sliders)
      setSlider(response?.sliders)
    })
  }

  useEffect(() => {
    getSliders()
  }, [])
  return (
    <View style={styles.container}>
      <Heading title={'Offers For You'} />

      <FlatList
        data={slider}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View style={{ marginHorizontal: 5 }}>
            <Image
              source={{ uri: item?.image?.url }}
              style={styles.sliderImage}
            />
          </View>
        )}
      />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: 'cover',
  },
})
