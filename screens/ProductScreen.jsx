import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../redux/product/product.action';
import Products from './Products/Products';

function ProductScreen({navigation}) {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    dispatch(getProducts());
    // console.log('products');
  }, []);
  const isLoading = useSelector(state => state.product.isLoading);
  const products = useSelector(state => state.product.products);
  const categories = ['All', ...useSelector(state => state.product.categories)];

  const renderCategoryItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        item === selectedCategory ? styles.categoryItemSelected : null,
      ]}
      onPress={() => setSelectedCategory(item)}>
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);

  return (
    <View style={styles.container}>
      <View style={{marginTop: 10, marginBottom: 10}}>
        <FlatList
          horizontal={true}
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesList}
        />
      </View>

      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#ff6900" />
        </View>
      ) : (
        <Products products={filteredProducts} navigation={navigation} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    categoriesList: {
      flexGrow: 0,
    },
    categoryItem: {
      padding: 10,
      marginHorizontal: 5,
      backgroundColor: '#ddd',
      borderRadius: 5,
    },
    categoryItemSelected: {
      backgroundColor: '#ff6900',
    },
    categoryText: {
      color: 'white',
    },
  });
  

export default ProductScreen;
