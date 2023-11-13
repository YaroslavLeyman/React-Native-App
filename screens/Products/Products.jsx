import React, { useCallback } from 'react'
import { FlatList, Text, View } from 'react-native'
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';

function Products({navigation, products}) {

    const cartItems = useSelector(state => state.cart.cart);

    const renderItem = useCallback(({ item, index }) => (
        <ProductItem
            navigation={navigation}
            item={item}
            cartItems={cartItems}
            index={index}
        />
    ));

    const keyExtractor = useCallback((item, index) => index.toString(), []); // Ключ


  return (
    <View style={{ gap: 10}}>
        <FlatList 
            data={products}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 50 }}
        />
    </View>
  )
}

export default Products