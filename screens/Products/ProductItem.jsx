import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function ProductItem({navigation, item, index}) {
  const addToCartHandler = () => {
    console.log('add');
  };

  const handleSelectProduct = product => {
    navigation.navigate('ProductDetails', {product});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSelectProduct(item)}>
        <Image source={{uri: item.thumbnail}} style={styles.image} />
        <Text>{item.title}</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <Text style={styles.price}>{item.price} <Icon name="dollar" color="black" size={16} /></Text>
        <TouchableOpacity onPress={addToCartHandler}>
          <View style={styles.addCartBtn}>
            <Icon name="shopping-cart" color="white" size={18} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
    padding: 10,
    backgroundColor: 'white',
    margin: 6,
    borderRadius: 6,
  },
  price: {
    flexDirection: 'row',
    gap: 5,
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  image: {
    borderRadius: 6,
    width: '100%',
    height: 150,
  },
  addCartBtn: {
    backgroundColor: '#ff6900',
    padding: 10,
    borderRadius: 5,
  },
});

export default ProductItem;
