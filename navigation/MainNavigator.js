const { Text } = require("react-native");
import {createStackNavigator} from '@react-navigation/stack';

function MainNavigator() {

    const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
             <Stack.Screen name="Main" component={<Text>MAin</Text>} />

    </Stack.Navigator>
  );
}

export default MainNavigator;
