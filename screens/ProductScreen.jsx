import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../redux/product/product.action';
import Products from './Products/Products';

function ProductScreen({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    console.log('products');
  }, []);
  const isLoading = useSelector(state => state.product.isLoading);
  const products = useSelector(state => state.product.products);
  const categories = useSelector(state => state.product.categories);

  return (
    <View>
      <Text>Тут ещё фильтр добавить</Text>

      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Products products={products} navigation={navigation} />
      )}
    </View>
  );
}

export default ProductScreen;
