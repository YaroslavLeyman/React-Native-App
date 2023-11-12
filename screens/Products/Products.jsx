import React, { useCallback } from 'react'
import { FlatList, Text, View } from 'react-native'
import ProductItem from './ProductItem';

function Products({products}) {

    const renderItem = useCallback(({ item, index }) => (
        <ProductItem
            item={item}
            index={index}
        />
    ));

    const keyExtractor = useCallback((item, index) => index.toString(), []);


  return (
    <View style={{ gap: 10}}>
        <FlatList 
            data={products} // Данные
            renderItem={renderItem} // Компонент
            keyExtractor={keyExtractor} // Ключ
            numColumns={2} // Количество столбцов
        />
    </View>
  )
}

export default Products