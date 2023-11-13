/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { AuthNavigator, MainNavigator } from './navigation';


function App() {
 
  const checkUser = useSelector(state => state.user.userInfo);

  return (
	<NavigationContainer>

			{checkUser  ? <MainNavigator /> : <AuthNavigator />}

	</NavigationContainer>

  );
}


export default App;
