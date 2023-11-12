import React, { useCallback } from 'react'
import { FlatList, Text, View } from 'react-native'
import ProductItem from './ProductItem';

function Products({navigation, products}) {

    const renderItem = useCallback(({ item, index }) => (
        <ProductItem
            navigation={navigation}
            item={item}
            index={index}
        />
    ));

    const keyExtractor = useCallback((item, index) => index.toString(), []); // Ключ


  return (
    <View style={{ gap: 10}}>
        <FlatList 
            data={products} // Данные
            renderItem={renderItem} // Компонент
            keyExtractor={keyExtractor} // Ключ
            numColumns={2} // Количество столбцов
            contentContainerStyle={{ paddingBottom: 50 }}
        />
    </View>
  )
}

export default Products