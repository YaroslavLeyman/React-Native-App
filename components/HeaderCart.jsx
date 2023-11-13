import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

function HeaderCart() {

    const navigator = useNavigation();


    const cart = useSelector(state => state.cart.cart);
    const count = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }, [cart]);

  return (
    <TouchableOpacity
      onPress={() => {
        navigator.navigate('Cart'); 
      }}
    >
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
      }}>
      <Icon name="cart-outline" size={32} />
      <Text
        style={{
          marginTop: -25,
          marginLeft: -15,
          backgroundColor: '#8d0000',
          borderRadius: 60,
          fontSize: 12,
          padding: 2,
          minWidth: 20,
          color: 'white',
          textAlign: 'center',
        }}>
        {count}
      </Text>
    </View>        
    </TouchableOpacity>

  );
}

export default HeaderCart;
