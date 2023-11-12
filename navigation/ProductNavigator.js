import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProductDetailsScreen, ProductScreen} from '../screens';

const Stack = createStackNavigator();

function ProductNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerRight: () => (
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
              50
            </Text>
          </View>
        ),
      }}>
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
}

export default ProductNavigator;
