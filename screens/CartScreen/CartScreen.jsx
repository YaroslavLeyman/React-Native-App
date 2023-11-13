import {useNavigation} from '@react-navigation/native';
import React, { useMemo } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
} from '../../redux/cart/cart.action';

function CartScreen() {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cart);

  const handleRemoveItem = id => {
    dispatch(removeItem(id));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = id => {
    dispatch(increaseItemQuantity(id));
  };

  const handleDecreaseQuantity = id => {
    dispatch(decreaseItemQuantity(id));
  };


  //
  const totalAmount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const totalCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);
  const handleCheckout = () => {
    navigator.navigate('CartCheckout', {totalAmount, totalCount});
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.thumbnail}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>Стоимость: {item.price} $</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => handleDecreaseQuantity(item.id)}
            style={styles.quantityButton}>
            <Icon name="minus" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => handleIncreaseQuantity(item.id)}
            style={styles.quantityButton}>
            <Icon name="plus" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleRemoveItem(item.id)}
        style={styles.removeButton}>
        <Icon name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  if (cartItems.length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Корзина пуста</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={handleClearCart} style={styles.clean}>
          <Text style={{color: 'white', justifyContent: 'space-between'}}>
            Очистить корзину <Icon name="trash" size={12} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
      <TouchableOpacity
        onPress={() => handleCheckout(totalAmount, totalCount)}
        style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Купить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },

  clean: {
    padding: 4,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'grey',

    maxWidth: 150,
  },

  list: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 6,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  removeButton: {
    justifyContent: 'center',
    paddingLeft: 10,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
  },
  checkoutButton: {
    backgroundColor: '#ff6900',
    padding: 15,
    borderRadius: 5,
    margin: 10,
  },
  checkoutText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default CartScreen;
