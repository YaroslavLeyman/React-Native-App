import React, {useMemo} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItem,
  decraseItemQuantity,
  increaseItemQuantity,
} from '../redux/cart/cart.action';

function AddCartBtn({item, buttonText }) {
  const cartItems = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const cartItem = {...item, quantity: 1};
    dispatch(addItem(cartItem));
  };

  const isInCart = useMemo(() => {
    return cartItems.find(cartItem => cartItem.id === item.id);
  }, [cartItems, item.id]);

  // изменяем количество товара в корзине
  const increaseQuantity = () => {
    dispatch(increaseItemQuantity(item.id));
  };

  const decreaseQuantity = () => {
    dispatch(decraseItemQuantity(item.id));
  };

  return (
    <>
      {!isInCart ? (
        <TouchableOpacity onPress={addToCartHandler}>
          <View style={styles.addCartBtn}>
            {buttonText ? <Text style={{color: 'white', fontWeight: 'bold'}}>{buttonText}</Text> : null}
            <Icon name="shopping-cart" color="white" size={16} />
          </View>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity onPress={decreaseQuantity}>
            <View
              style={{
                backgroundColor: '#ff6900',
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                padding: 7,
              }}>
              <Icon name="minus" color="white" size={16} />
            </View>
          </TouchableOpacity>
          <TextInput
            placeholder={isInCart.quantity ? isInCart.quantity.toString() : '1'}
            value={isInCart.quantity ? isInCart.quantity.toString() : '1'}
            editable={false} // Запрещаем редактирование
            style={styles.input}
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={increaseQuantity}>
            <View
              style={{
                backgroundColor: '#ff6900',
                padding: 7,
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4,
              }}>
              <Icon name="plus" color="white" size={16} />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  addCartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#ff6900',
    padding: 8,
    borderRadius: 4,
  },
  input: {
    width: 30,
    textAlign: 'center',
  },
  input: {
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 2,
    paddingRight: 2,
    borderWidth: 1,
    borderColor: '#ff6900',
    minWidth: 30,
  },
});

export default AddCartBtn;
