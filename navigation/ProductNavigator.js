import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {CartCheckoutScreen, CartScreen, ProductDetailsScreen, ProductScreen} from '../screens';
import HeaderCart from '../components/HeaderCart';

const Stack = createStackNavigator();

function ProductNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerRight: () => (
            <HeaderCart />
        ),
      }}>
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="CartCheckout" component={CartCheckoutScreen} />
    </Stack.Navigator>
  );
}

export default ProductNavigator;
