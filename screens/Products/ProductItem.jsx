import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function ProductItem({item, index}) {
  return (
    <View style={styles.container}>
        <Image source={{uri: item.thumbnail}} style={styles.image} />
        <Text>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        padding: 10,
        backgroundColor: 'white',
        margin: 6,
        borderRadius: 6

    },
    image: {
        borderRadius: 6,
        width: '100%',
        height: 150
    }
})

export default ProductItem