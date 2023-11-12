import {createStackNavigator} from '@react-navigation/stack';
import { MainScreen, ProfileScreen } from '../screens';

function MainNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
