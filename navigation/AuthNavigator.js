import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, RegisterScreen} from '../screens';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
