import {useNavigation} from '@react-navigation/native';
import React, {useMemo, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

function HeaderCart() {
  const navigator = useNavigation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const cart = useSelector(state => state.cart.cart);
  const count = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);


  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {isSearchVisible && (
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, flex: 1}}
        />
      )}
      <TouchableOpacity onPress={() => setIsSearchVisible(!isSearchVisible)}>
        <Icon name={isSearchVisible ? 'close' : 'search-outline'} size={32} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigator.navigate('Cart')}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
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
    </View>
  );
}

export default HeaderCart;
