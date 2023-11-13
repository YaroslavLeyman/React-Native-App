import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

function CartCheckoutScreen() {
  const route = useRoute();
  const {totalCount, totalAmount} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10}}>
      <Text style={{fontSize: 16}}>Товаров в корзине: {totalCount}</Text>
      <Text style={{fontSize: 20}}>Стоимость заказ: {totalAmount} $</Text>
      <Button title="Купить"  />
    </View>
  );
}

export default CartCheckoutScreen;
